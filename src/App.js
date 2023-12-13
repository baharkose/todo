import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import background from "./img/back.png"

function App() {
  const [addList, setAddList] = useState(
    JSON.parse(localStorage.getItem("list")) || []
  );

  return (
    <>
      <div className="container">
        <div className="todo-container">
          <h1>To Do List</h1>
          <Header setAddList={setAddList} addList={addList} />
          <TodoList addList={addList} setAddList={setAddList} />
          <img className="backgroundImg" src={background} alt=""  width="300px"/>
        </div>
      </div>
    </>
  );
}

export default App;
