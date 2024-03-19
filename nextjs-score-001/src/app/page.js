"use client";
// import Image from "next/image";
import css from "@/css/student.list.module.css";
import styles from "@/css/page.module.css";
import StudentList from "./comps/StudentList.js";
import { useEffect, useState } from "react";
// import 한 select all 함수를 st_selectAll 라는 이름으로 사용하겟다.
import { selectAll as st_selectAll } from "@/app/api/student.js";
import StudentDetail from "./comps/StudentDetail.js";
import ScoreList from "./comps/ScoreList.js";
import { findByStNum } from "./api/score.js";

export default function Home() {
  const [studentList, setStudentList] = useState([]);
  const [scoreList, setScoreList] = useState([]);
  const [student, setStudent] = useState({});

  useEffect(() => {
    const stdFetch = async () => {
      const result = await st_selectAll();
      console.log(result);
      if (result) {
        setStudentList([...result]);
        setStudent(result[0]);
      }
    };
    stdFetch();
  }, []);

  useEffect(() => {
    const scoreFetch = async () => {
      const result = await findByStNum(student?.st_num ?? "S0001");
      setScoreList([...result]);
    };
    scoreFetch();
  }, [student]);

  return (
    <main className={styles.main}>
      <section className={styles.list}>
        <StudentList
          studentList={studentList}
          setStudent={setStudent}
        />
      </section>
      <section className={styles.detail}>
        <StudentDetail student={student}>
          <ScoreList scoreList={scoreList} />
        </StudentDetail>
      </section>
    </main>
  );
}
