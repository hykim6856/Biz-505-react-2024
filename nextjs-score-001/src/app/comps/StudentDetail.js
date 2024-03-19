import css from "@/css/student.list.module.css";
import styles from "@/css/page.module.css";
const StudentDetail = ({ children, student }) => {
  return (
    <>
      <h1 className={styles.head}>자세히 보기</h1>
      {/* <div className={css.body}>
        <div>
          <strong>학번</strong>
          <span>{student.st_num}</span>
        </div>
        <div>
          <strong>이름</strong>
          <span>{student.st_name}</span>
        </div>
        <div>
          <strong>학과</strong>
          <span>{student.st_dept}</span>
        </div>
        <div>
          <strong>학년</strong>
          <span>{student.st_grade}</span>
        </div>
        <div>
          <strong>전화번호</strong>
          <span>{student.st_tel}</span>
        </div>
        <div>
          <strong>주소</strong>
          <span>{student.st_address}</span>
        </div>
      </div> */}
      {children}
    </>
  );
};

export default StudentDetail;
