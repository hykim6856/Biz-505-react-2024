"use client";
import css from "@/css/insert.module.css";
const OrderInsert = () => {
  // const viewList = orderList.map((order) => (
  //   <li key={order.o_num}>
  //     {order.o_num},{order.o_ccode}
  //   </li>
  // ));

  return (
    <>
      <section className={css.main}>
        <h1>주문번호: </h1>
        <form>
          <div>
            <input placeholder="고객코드"></input>
            <button>검색</button>
            <ul className={css.list}>
              <li>P00010</li>
              <li>P00010</li>
              <li>P00010</li>
              {/* {viewList} */}
            </ul>
          </div>
          <div>
            <input placeholder="상품코드"></input>
            <button>검색</button>
          </div>
          <div>
            <input placeholder="주문수량"></input>
            <button>추가</button>
          </div>
        </form>
        <div className={css.table_box}>
          <table>
            <thead>
              <th>
                <span>상품코드</span>
              </th>
              <th>
                <span>상품명</span>
              </th>
              <th>
                <span>주문수량</span>
              </th>
            </thead>
            <tbody>
              <td>1</td>
              <td>(상품명)</td>
              <td>(주문수량)</td>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};
export default OrderInsert;
