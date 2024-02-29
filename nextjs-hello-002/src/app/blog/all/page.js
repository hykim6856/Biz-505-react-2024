/**
 * Next Js 는 ssr csr 을 같이 지원하는  Frame work 이다.
 * 순수 리액트에서는 모든것이 csr이기 때문에 별다른 조치 없이 내장된 함수, 기능이 차이가 있다.
 * 하지만 nextjs 에서는 컴포넌트가 ssr에서 동작하느냐, csr에서 동작하느냐에 따라 사용할 수 있는 함수, 기능이 차이가 있다. CSR
 */

"use client";

import { useRouter } from "next/router";
// import { usePathname } from "next/navigation";
export default () => {
  // Link, router 를 통해 이 페이지가 열릴때 사용한 url을 알려줌
  //   const pathname = usePathname();
  const router = useRouter();

  const blogList = [
    { id: 1, subject: "안녕하세요" },
    { id: 2, subject: "안녕하세요2" },
    { id: 3, subject: "안녕하세요3" },
  ];

  const onClickHandler = (id) => {
    // alert(id);
    router.push(`/blog/detail/${id}`);
  };
  // event 핸들러에 어떤 값을 전달 할 때 핸들러 세팅
  // onClick={()=>호출할 함수(전달할 값)}
  // onClick={호출함수(전달 값)} 처럼 사용하면 절대 안됨
  const viewList = blogList.map((blog) => {
    return (
      <li key={blog.id} onClick={() => onClickHandler(blog.id)}>
        <span>{blog.id}</span>
        <span>{blog.subject}</span>
      </li>
    );
  });
  return (
    <>
      <h3>전체글 보기</h3>
      <ul>{viewList}</ul>
    </>
  );
};
// v12 이하에서 자동 실행되는 함수
// export const getStaticProps = async () => {
//   return {
//     props: { blogList: blogList },
//   };
// };
