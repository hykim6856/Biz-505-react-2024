import styles from "../css/MemoMain.module.css";
import "../css/Memo.css";
import MemeMainLeft from "./MemoMainLeft";
import MemeMainRight from "./MemoMainRight";
//memoleft , memoRight 에서  import 할 컴포넌트를 main에서 import 하고

import MemoDate from "./MemoDate";
import MemoList from "./MemoList";
import MemoInput from "./MemoInput";
import { useState } from "react";
import moment from "moment";

// moment();

const MemoMain = () => {
  const [memo, setMemo] = useState({
    m_seq: 0,
    m_author: "hykim6856@gamil.com",
    m_date: moment().format("YYYY-MM-DD"),
    m_time: moment().format("HH:mm:ss"),
    m_subject: "",
    m_memo: "",
    m_image: "",
  });
  const [memoList, setMemoList] = useState([]);

  const memoInsert = () => {
    const newMemoList = [...memoList, memo];
    setMemoList(newMemoList);
    setMemo({
      ...memo,
      m_seq: 0,
      m_author: "hykim6856@gamil.com",
      m_date: moment().format("YYYY-MM-DD"),
      m_time: moment().format("HH:mm:ss"),
      m_subject: "",
      m_memo: "",
      m_image: "",
    });
  };

  return (
    <div className={styles.main}>
      <div className={styles.aside}>
        <MemeMainLeft>
          <MemoDate memo={memo} setMemo={setMemo}></MemoDate>
          <MemoList memoList={memoList} />
        </MemeMainLeft>
      </div>
      <div className={styles.aside}>
        <MemeMainRight>
          <MemoInput memo={memo} setMemo={setMemo} memoInsert={memoInsert}></MemoInput>
        </MemeMainRight>
      </div>
    </div>
  );
};
export default MemoMain;
