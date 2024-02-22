import "../css/TodoList.css";

// seq와 todo 구성요소를 갖는 json 객체 데이터 3개를 포함하는 배열

// import { useState } from "react";

// json : javascript object notaion
const todoListSample = [
  { seq: 1, todo: "React 시작" },
  { seq: 2, todo: "UI 구현" },
  { seq: 3, todo: "Spring 서버" },
];

const TodoList = ({ todoList }) => {
  //todoListSample 데이터가 채워진 todoList 상태 변수 배열 시작하기
  // const [todoList, setTodoList] = useState(todoListSample);

  //시나리오가 변경되어 todo list 상태배열을 todomain으로부터 전달받아 props로 전달받아 사용.

  //exec/array.js 참조
  // todoList.forEach((todo) => console.log(todo));
  // todoList.filter();
  const viewList = todoList.map((item) => <div className="todoItem">{item.todo}</div>);

  return <>{viewList}</>;
};

export default TodoList;
