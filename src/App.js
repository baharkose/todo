import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

function App() {
  const [addList, setAddList] = useState([]);

  return (
    <>
      <Header setAddList={setAddList} addList={addList} />
      <TodoList addList={addList} />
    </>
  );
}

export default App;
