"use client";
import { findByCustomer } from "@/app/api/customer";
import { findByProduct } from "@/app/api/product";
import css from "@/css/order.insert.module.css";
import { useCallback, useEffect, useState } from "react";
import CustomSearch from "./CustomSearch";
import ProductSearch from "./ProductSearch";
import { getOrderListByPcode } from "@/app/api/order";
import { findByPcode } from "@/app/api/order";
const OrderInsert = () => {
  const [search, setSearch] = useState("");
  const [customList, setCustomList] = useState([]);
  const [customer, setCustomer] = useState("");
  const [orderList, setOrderList] = useState([]);

  const [productList, setProductList] = useState([]);
  const [product, setProduct] = useState("");

  /*
  useCallback;
  State 생성 영역(컴포넌트 함수내의 return 명령 이전의 영역에 선언한는 함수는 
    ) 하지만 스테이트 영역에 선언된 함수는 스테이트ㅏ 변화되는 짧은 시간동안
    계속해서 함수를 선언, 생성하는 동작이 반복된다.
    이미 함수를 만들어서 사용하고 있음에도 무시하고 새로 생성
    이런과정에서 사용하지 않는게 메모리에 남게되고 누수가 발행한다.
 */
  const customChangeHandler = useCallback(async (e) => {
    const search = e.target.value;
    // console.log(search);
    if (search) {
      const result = await findByCustomer(search);
      setCustomList([...result]);
    } else {
      setCustomList([]);
    }
  });

  const productChangeHandler = useCallback(async (e) => {
    const search = e.target.value;
    console.log(search);
    if (search) {
      const result = await findByProduct(search);
      setProductList([...result]);
    } else {
      setProductList([]);
    }
  });

  useEffect(() => {
    const fetchOrder = async () => {
      if (customer && customer?.c_code) {
        const result = await getOrderListByPcode(customer.c_code);
        setOrderList([...result]);
      }
    };
    fetchOrder();
  }, [customer]);

  useEffect(() => {
    const fetchOrder = async () => {
      if (product && product?.p_code) {
        const result = await findByPcode(product.p_code);
        setOrderList([...result]);
      }
    };
    fetchOrder();
  }, [product]);

  /**
   * 상품정보 input box 에 상품이름을 입력하면
   * tbl_product 에서 상품정보를 fetch 하고
   * 상품검색 input box 아래에 목록을 보여주는 코드 작성
   */

  return (
    <article className={css.main}>
      <form className={css.form}>
        <div className={css.custom}>
          <input
            onChange={customChangeHandler}
            placeholder="고객정보"
            defaultValue={search}
          ></input>
          {/* <button>검색</button> */}
          {customList.length > 0 && (
            <CustomSearch
              customList={customList}
              setCustomList={setCustomList}
              setCustomer={setCustomer}
            />
          )}
          {customer && (
            <ul>
              <li>고객코드 :{customer.c_code}</li>
              <li>고객이름 :{customer.c_name}</li>
              <li>전화번호 :{customer.c_tel}</li>
            </ul>
          )}
        </div>

        <div className={css.product}>
          <input
            onChange={productChangeHandler}
            placeholder="상품정보"
            defaultValue={search}
          ></input>
          <button>검색</button>
          {productList.length > 0 && (
            <ProductSearch
              productList={productList}
              setProductList={setProductList}
              setProduct={setProduct}
            />
          )}
          {product && (
            <ul>
              <li>상품코드 :{product.p_code}</li>
              <li>상품이름 :{product.p_name}</li>
            </ul>
          )}
        </div>
        <div>
          <input placeholder="주문수량"></input>
          <button>추가</button>
        </div>
      </form>
      <div>
        <h3>주문목록</h3>
        <ul className={css.product_list}>
          {orderList.map((order) => (
            <li>
              <p>
                {order.o_num}, {order.o_date}
                <ul className={css.products}>
                  {order.products.map((item) => (
                    <li>
                      {item.op_pcode}, {item.product.p_name},
                      {item.product.p_item},{item.product.p_price}
                    </li>
                  ))}
                </ul>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};
export default OrderInsert;
