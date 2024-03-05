import { getNaverBooks } from "@/api/naver_api";
const BookList = async () => {
  const books = await getNaverBooks();
  const viewList = books.map((book) => <li>{book.title}</li>);
  return <ul>{viewList}</ul>;
};

export default BookList;
