import Link from "next/link";
import styles from "./aside.module.css";
import { usePathname } from "next/navigation";
// import { useRouter } from "next/router";

export default () => {
  const pathname = usePathname();
  const routes = [
    { path: "/blog/write", title: "글쓰기" },
    { path: "/blog/all", title: "전체글 보기" },
    { path: "/blog/new", title: "최신글 보기" },
    { path: "/blog/like", title: "인기글보기" },
  ];
  // const router = useRouter();
  return (
    <ul className={styles.ul}>
      <li>
        <Link
          href={routes.path}
          className={pathname === route.path ? styles.active : ""}
        >
          {route.title}
        </Link>
      </li>
    </ul>
  );
};
