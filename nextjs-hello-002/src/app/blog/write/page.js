import styles from "./write.module.css";
import { redirect } from "next/navigation";

const FORM_NAME = {
  CATEGORY: "category",
  SUBJECT: "subject",
  CONTENT: "content",
};

export default () => {
  // form 의  input 에 저장된 값들을 함수에 전달해주는 매개변수가 필요
  // fromData 에 input 에 입력한 값들이 담겨서 전달된다.
  const actionHandler = async (formData) => {
    "use server";
    const data = {
      category: formData.get("category"),
      subject: formData.get("subject"),
      content: formData.get("content"),
    };
    console.log("FORM", data);
    redirect("/blog/all");
  };
  //   console.log("여");

  return (
    <form
      className={styles.form}
      action={actionHandler}
      method="POST"
    >
      <input placeholder="카테고리" name={FORM_NAME.CATEGORY} />
      <input placeholder="제목" name={FORM_NAME.SUBJECT} />
      <textarea
        placeholder="내용"
        name={FORM_NAME.CONTENT}
        rows="20"
      ></textarea>
      <input
        className={styles.submit}
        type="submit"
        placeholder="저장"
      />
    </form>
  );
};
