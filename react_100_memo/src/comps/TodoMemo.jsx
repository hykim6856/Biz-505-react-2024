import { useState } from "react";
import MemoTime from "./MemoTime";
import MemoInput from "./MemoInput";
import "../css/TodoMemo.css";

const TodoMemo = () => {
  const [memos, setMemos] = useState([]);

  // MemoInput에서 호출되는 onSave 함수
  const handleSaveMemo = (memo) => {
    // 새로운 메모를 배열에 추가
    setMemos([...memos, memo]);
  };

  return (
    <div className="mainMemo">
      <div className="left side">
        <div className="times">
          <MemoTime />
        </div>
        <div className="lists">
          {/* 생성된 메모를 화면에 출력 */}
          {memos.map((memo, index) => (
            <div className="memos" key={index}>
              <p>{memo.title}</p>
              {/* <p>{memo.content}</p> */}
            </div>
          ))}
        </div>
      </div>
      <div className="right side">
        {/* onSave prop으로 handleSaveMemo 함수 전달 */}
        <MemoInput onSave={handleSaveMemo} />
      </div>
    </div>
  );
};

export default TodoMemo;
