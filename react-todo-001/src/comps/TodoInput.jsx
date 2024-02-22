import { useState } from "react";
import "../css/TodoInput.css";

/**
 * 현재 button이 disabled 상태이다
 * input box에 문자열이 입력되면
 * 입력된 문자열 개수를 계산하여 3글자 이상이 되면
 * button의 disabled을 해제하여 click이 가능한 상태로 만들고 싶다
 */

// 표준 js와 달리 react에서는 상태를 관리하는 방법이 다르다.

const TodoInput = ({ todoItem, setTodoItem, todoInsert }) => {
  //지금부터 todoItem 이라는 상태 변수가 시작된다.
  // == 상태 변수 선언의 다른 표현
  // 상태 변수는 ReadOnly 이다.
  // const [todoItem, setTodoItem] = useState("");
  //시나리오가 변경되어 todoItem 상태를 todoMain으로 보내고

  //props 로 전달받아 사용할예정

  const onInserthandler = () => {
    todoInsert();
  };

  //input box 에 키보드로 문자열을 입력하면 작동되는 event 핸들러
  const onChangeHandler = (e) => {
    // 키보드로 입력한 한개의 문자열 getter
    const text = e.target.value;
    // todoitem 상태변수의 상태를 변경하는 함수
    setTodoItem(text);
  };

  return (
    <div className="todoInput">
      <input placeholder="todo" value={todoItem} onChange={onChangeHandler} />
      <button disabled={todoItem.length < 3} onClick={onInserthandler}>
        추가
      </button>
      <p>{todoItem.length > 5 ? "안녕" : "반갑습니다"}</p>
    </div>
  );
};

export default TodoInput;
