"use client";
// import Image from "next/image";
import styles from "@/css/page.module.css";
import StudentList from "./comps/StudentList.js";
import { useEffect, useState } from "react";
import STD_TABLE from "@/app/api/student.js";

export default function Home() {
  const [studentList, setStudentList] = useState([]);

  useEffect(() => {
    const stdFetch = async () => {
      const result = await STD_TABLE.selectAll();
      if (result) setStudentList([...result]);
    };
    stdFetch();
  }, []);

  return (
    <main className={styles.main}>
      <section className={styles.list}>
        <StudentList studentList={studentList} />
      </section>
      <section className={styles.detail}></section>
    </main>
  );
}
