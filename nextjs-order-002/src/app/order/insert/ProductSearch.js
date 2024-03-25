import css from "@/css/order.insert.module.css";

const ProductSearch = ({
  productList,
  setProductList,
  setProduct,
}) => {
  const onClickHandler = (pro) => {
    alert(pro);
    setProduct(pro);
    setProductList([]);
  };
  const viewList = productList.map((item) => (
    <li
      key={item.p_code}
      p_code={item.p_code}
      onClick={() => onClickHandler(item)}
    >
      {item.p_code},{item.p_name}
    </li>
  ));
  return <ul className={css.productList}>{viewList}</ul>;
};
export default ProductSearch;
