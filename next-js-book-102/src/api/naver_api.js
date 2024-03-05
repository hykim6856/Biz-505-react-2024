const { NAVER_CLIENT_ID, NAVER_CLIENT_SECRET } = process.env;
const NAVER_BOOK_URL =
  "https://openapi.naver.com/v1/search/book.json";

export const getNaverBooks = async (search) => {
  const fetchOption = {
    method: "GET",
    headers: {
      "X-Naver-Client-Id": NAVER_CLIENT_ID,
      "X-Naver-Client-Secret": NAVER_CLIENT_SECRET,
    },
  };

  const response = await fetch(
    `${NAVER_BOOK_URL}?query=${search}`,
    fetchOption
  );
  const books = await response.json();
  // console.log(books);
  return books.items;
};
