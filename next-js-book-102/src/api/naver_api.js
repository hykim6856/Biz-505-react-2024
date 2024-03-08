"use server";
// const NAVER_CLIENT_ID = process.env.NAVER_CLIENT_ID;
// const NAVER_CLIENT_SECRET = process.env.NAVER_CLIENT_SECRET;

// console.log(NAVER_CLIENT_ID, NAVER_CLIENT_SECRET);

// const books = await getNaverBooks();
// const viewList = books.map((book) => <li>{book.title}</li>);
// console.log(books);

// process.env 환경변수를 구조분해하여 개별변수에 할당하기
const { NAVER_CLIENT_ID, NAVER_CLIENT_SECRET } = process.env;
const NAVER_BOOK_URL =
  "https://openapi.naver.com/v1/search/book.json";

// 만약 client mode 로 사용하는 컴포넌트, 함수모듈등에는
// 함수의 시작부분에 async 를 절대 사용하면 안된다.

export const getNaverBooks = async (search) => {
  const fetchOption = {
    nethod: "GET",
    headers: {
      "X-Naver-Client-Id": NAVER_CLIENT_ID,
      "X-Naver-Client-Secret": NAVER_CLIENT_SECRET,
    },
  };
  const response = await fetch(
    `${NAVER_BOOK_URL}?query=${search || "java"}`,
    fetchOption
  );
  const books = await response.json();
  // naver_api.js 는 server 모듈이다
  // 이 모듈에서 console.log() 를 사용하면 서버 consol에 출력된다.
  // console.log("BOOKS", books);
  return books.items;
};
