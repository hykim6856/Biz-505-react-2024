// import { useRef } from "react";
import "../css/TodoInput.css";

const TodoInput = ({ todoItem, setTodoItem, todoInsert }) => {
  // 특정 tag형 컴포넌트에 id를 부여하기 위한 도구
  // const inputRef = useRef();
  const onInsertHandler = () => {
    // inputRef.current.value = "";
    todoInsert();
    setTodoItem("");
  };

  const onChangeHandler = (e) => {
    const text = e.target.value;
    setTodoItem(text);
  };

  return (
    <div className="todoInput">
      <input placeholder="todo" value={todoItem} onChange={onChangeHandler} />
      <button disabled={todoItem.length < 2} onClick={onInsertHandler}>
        추가
      </button>
      {/* <p>{todoItem.length > 5 ? "안녕" : "반갑습니다"}</p> */}
    </div>
  );
};

export default TodoInput;
