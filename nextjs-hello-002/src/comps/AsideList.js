import Link from "next/link";
import styles from "./comps.module.css";

export default () => {
  return (
    <ul>
      <li className={styles.li}>
        <Link href="/blog/all">전체글 보기</Link>
      </li>
      <li className={styles.li}>
        <Link href="/blog/like">인기글 보기</Link>
      </li>
      <li className={styles.li}>
        <Link href="/blog/new">최근글 보기</Link>
      </li>
    </ul>
  );
};
