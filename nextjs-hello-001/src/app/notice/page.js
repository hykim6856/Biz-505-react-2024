import Link from "next/link";
const NoticePage = () => {
  return (
    <div>
      <h1>공지사항 페이지</h1>
      <Link href="/notice/input">공지사항작성</Link>
    </div>
  );
};
export default NoticePage;
