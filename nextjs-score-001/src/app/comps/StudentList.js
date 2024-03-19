import styles from "@/css/page.module.css";
import css from "@/css/student.list.module.css";
import React from "react";
const StudentList = ({ studentList, setStudent }) => {
  const viewList = studentList.map((item) => (
    <li
      key={item.st_num}
      className={css.item}
      onClick={() => setStudent(item)}
    >
      <strong>{item.st_num}</strong>
      <strong>{item.st_name}</strong>
      <span>{item.st_dept}</span>
    </li>
  ));
  return (
    <>
      <h1 className={styles.head}>학생 리스트</h1>
      <div className={styles.tle}>
        <strong>학번</strong>
        <strong>이름</strong>
        <span>학과</span>
        <ul className={styles.ul}>{viewList}</ul>
      </div>
    </>
  );
};
export default StudentList;
