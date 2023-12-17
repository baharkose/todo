import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import background from "./img/back.png";
import emptyImg from "./img/empty.png";
import { AiFillCaretLeft } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";
import Pagination from "./components/Pagination";

function App() {
  const [addList, setAddList] = useState(
    JSON.parse(localStorage.getItem("list")) || []
  );
  const listLength = addList.length;
 
  console.log(listLength);

  return (
    <>
      <div className="container">
        <div className="todo-container">
          <h1 style={{ color: "#5B5A76" }}>To Do List</h1>
          <Header setAddList={setAddList} addList={addList} />
          <div>
            <div
              className="emptyResim"
              style={{ display: listLength === 0 ? "block" : "none" }}
            >
              <img className="emptyImg" src={emptyImg} alt="" width="170px" />
            </div>
            <TodoList addList={addList} setAddList={setAddList} />
          </div>
          <img
            className="backgroundImg"
            src={background}
            alt=""
            width="300px"
          />
        </div>
      </div>
    </>
  );
}

export default App;
