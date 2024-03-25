import css from "@/css/order.insert.module.css";

const CustomSearch = ({ customList, setCustomList, setCustomer }) => {
  const onClickHandler = (custom) => {
    // alert(custom);
    setCustomer(custom);
    setCustomList([]);
  };
  const viewList = customList.map((item) => (
    <li
      key={item.c_code}
      c_code={item.c_code}
      onClick={() => onClickHandler(item)}
    >
      {item.c_code},{item.c_name},{item.c_tel}
    </li>
  ));
  return <ul className={css.customList}>{viewList}</ul>;
};
export default CustomSearch;
