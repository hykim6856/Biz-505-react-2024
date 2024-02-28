import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>나의 NextJS 첫 프로젝트</h1>
      <p>
        <a href="/bbs">게시판</a>
      </p>
      <p>
        <a href="/notice">공지사항</a>
      </p>
    </main>
  );
}
