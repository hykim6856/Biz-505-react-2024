"use client";
import Link from "next/link";
import css from "@/css/order.main.module.css";
import { useEffect, useState } from "react";
import { selectAll } from "../api/order";

const OrderPage = () => {
  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    const getOrderList = async () => {
      const result = await selectAll();
      //   setOrderList(result); <<-- 이거쓰면 잘 안되는 경우가 있음
      setOrderList([...result]);
    };
    getOrderList();
  }, []);

  const viewList = orderList.map((order) => (
    <li key={order.o_num}>
      {order.o_num},{order.o_ccode}
    </li>
  ));

  return (
    <section className={css.main}>
      <ul className={css.list}>{viewList}</ul>
      <div className={css.link}>
        <Link href={"/order/insert"}>주문서 추가</Link>
      </div>
    </section>
  );
};

export default OrderPage;
