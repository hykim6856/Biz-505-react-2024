/**
 * 공지사항 작성하기
 * 작성자, 제목, 내용, 중요도
 * 저장버튼
 
 */
import styles from "../input.css";

const NoticeInput = () => {
  return (
    <>
      <div className="noticeAll">
        <h1>공지사항 작성하기</h1>
        <div className="noticeBox">
          <input value="작성자" readOnly></input>
          <div className="titleBox">
            <input className="title" placeholder="제목"></input>
            <label htmlFor="import">중요</label>
            <input type="checkbox" id="import" name="import"></input>
          </div>
          <input className="content" placeholder="내용"></input>
          <input type="button" value="저장"></input>
        </div>
      </div>
    </>
  );
};
export default NoticeInput;
