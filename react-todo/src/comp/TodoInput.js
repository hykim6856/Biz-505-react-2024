// 투두메인에서 보낸 투두, 셋투두, 셋투두리스트 피롭스(properties)
const TodoInput = ({ todo, setTodo, todoList, setTodoList }) => {
  const todoOnChangeHandler = (event) => {
    const target = event.target;
    setTodo(target.value);
  };

  const addBtnClickHandler = () => {
    setTodoList([...todoList, todo]);
  };

  return (
    <div className="input">
      <input placeholder="To Do..." value={todo} onChange={todoOnChangeHandler} />
      {/* todo state 에 저장된 값이 2글자 이상일때만 버튼을 클릭할 수 있도록 하라. */}
      <button id="btn_add" disabled={todo.length < 2} onClick={addBtnClickHandler}>
        추가
      </button>
    </div>
  );
};
export default TodoInput;
