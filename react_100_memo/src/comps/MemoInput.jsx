import { useState } from "react";
import "../css/TodoMemo.css";

const MemoInput = ({ onSave }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSave = () => {
    // onSave 함수를 호출하여 제목과 내용을 전달합니다.
    onSave({ title, content });
    // 입력 필드 초기화
    setTitle("");
    setContent("");
  };

  return (
    <>
      <input type="text" placeholder="제목을 입력해주세요" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" placeholder="내용을 입력해주세요" value={content} onChange={(e) => setContent(e.target.value)} />
      <input type="file" />
      <button onClick={handleSave}>저장</button>
    </>
  );
};

export default MemoInput;
