const { NAVER_CLIENT_ID, NAVER_CLIENT_SECRET } = process.env;
const NAVER_BOOK_URL =
  "https://openapi.naver.com/v1/search/book.json";

//만약 client mode 로 사용하는 컴포넌트, 함수모듈등에는
//함수의 시작부분에 async 를 절대 사용해서는 안된다.
export const getNaverBooks = async (search) => {
  const fetchOption = {
    method: "GET",
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
  // naver api.js 는 서버 모듈이 모듈에서 콘솔로그를 사용하면 콘솔에 출력된다.
  console.log("BOOKS", books);
  return books.items;
};
