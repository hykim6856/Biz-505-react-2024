"use client";
import { useEffect, useState } from "react";
import { getNaverBooks } from "@/api/naver_api";

const BookList = ({ search }) => {
  const [books, setBooks] = useState([]);
  /**
   * useEffect 함수에서 익명의 함수를 생성하고
   * useEffect(()=>{},[]) :useEffect 의 기본 몸체
   * 몸체 ({})에서 async 로 사용할 함수를 선언한다.
   *  여기에서는 const fetch = async ()= >{}
   * useEffect(()=>{const fetch = async =() =>{}},[])
   * 이 함수를 다시 호출하여 실행한다.
   * useEffect(()=>{
   *  const fetchData = async () =>{} // 선언
   *  fetchData() //선언한 함수호출
   * },[])
   */
  useEffect(() => {
    const fetchData = async () => {
      const result = await getNaverBooks(search);
      //클라이언트 컴포넌트인 북 리스트에서 콘솔.로그를 사용하면
      //브라우저의 개발자도구 콘솔에 내용이 출력된다.
      // console.log(result);
      setBooks([...result]);
    };
    fetchData();
  }, []);
  const viewList = books.map((book) => <li>{book.title}</li>);
  return <ul>{viewList}</ul>;
};

export default BookList;
