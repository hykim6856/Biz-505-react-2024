import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import "../css/TodoMain.css";
import { useState } from "react";
const todoListSample = [
  { seq: 1, todo: "React 시작" },
  { seq: 2, todo: "UI 구현" },
  { seq: 3, todo: "Spring 서버" },
];

/**
 * 1.코드 시나리오 변경
 * todo input 에서 사용하던 todoitem (오늘 할일 데이터가 저장된 상태변수) 값을
 * TodoList 가 화면에 표현하는 todoList 상태배열에 추가하고 싶다.
 * TodoInput 에서 입력된 값을 TodoList(컴포넌트) 에게 전달하여 배열에 추가를 해야한다.
 * React 에선 형제 컴포넌트 간에는 상태변수가 변수의 값을 전달 할 수 없다.
 * 그래서 TodoInput 과 TodoList 에서 시작된 상태변수를 부모인TodoMain 으로 끌어올리기를 해야한다.
 */
const TodoMain = () => {
  //TodoInput (컴포넌ㄴ트)와 TodoList (컴포넌트)에서 시작된 상태변수를 끌올하여 다시시작
  const [todoItem, setTodoItem] = useState("");
  const [todoList, setTodoList] = useState([]);

  //TodoInput(comps) 가 데이터를 추가해 달라는 요청을 할대 사용할 함수
  const todoInsert = () => {
    //추가버튼이 클릭되면 TodoMain에서 보내준(전달한) todoinsert 함수를 호출하라
    // alert("데이터 추가 요청");
    /*현재시점에서 아이템 상태와 리스트 상태변수, 입력하는 함수가 모두 메인에 있다.
    그러므로 리스트에 아이템을 추가하는 코드는 별로 어렵지 않다.
    그런데, 투두 리스트는 상태배열이다.
    상태배열에는 일반적인 방법으로 요소를 추가할 수 없다.
    상태 배열에 요소를 추가하려면
    원래 배열을 복제하고, 요소를 추가한 다음 원래 배열과 교체를 해야한다.*/
    //상태 배열의 "상태(값)를 변경하는 함수"
    const newTodoList = [...todoList, { todo: todoItem }];
    setTodoList(newTodoList);
  };

  return (
    <div className="todoMain">
      <header className="todoHeader">
        <h1>지금 할일!!</h1>
      </header>
      <TodoInput todoItem={todoItem} setTodoItem={setTodoItem} todoInsert={todoInsert} />
      <TodoList todoList={todoList} />
    </div>
  );
};

export default TodoMain;
