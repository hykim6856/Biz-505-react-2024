import Image from "next/image";
import styles from "./page.module.css";
import BookMain from "@/comps/BookMain";
// const NAVER_CLIENT_ID = process.env.NAVER_CLIENT_ID;
// const NAVER_CLIENT_SECRET = process.env.NAVER_CLIENT_SECRET;

//process.env 환경변수를 구조분해하여 개별 변수에 할당하기
// const { NAVER_CLIENT_ID, NAVER_CLIENT_SECRET } = process.env;
// const NAVER_BOOK_URL =
//   "https://openapi.naver.com/v1/search/book.json";

export default async () => {
  // console.log(NAVER_CLIENT_ID, NAVER_CLIENT_SECRET);
  // const books = await getNaverBooks();
  // const viewList = books.map((book) => <li>{book.title}</li>);
  // console.log(books);
  return (
    <main>
      <BookMain />
    </main>
  );
};
