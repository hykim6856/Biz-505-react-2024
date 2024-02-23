// import logo from "./logo.svg";
import "./css/App.css";
import TodoMemo from "./comps/TodoMemo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>오늘은 내 생에 가장 젊은 날</h2>
      </header>
      <TodoMemo />

      <footer>
        <address>CopyRight&copy;hykim6856@gmail.com</address>
      </footer>
    </div>
  );
}

export default App;
