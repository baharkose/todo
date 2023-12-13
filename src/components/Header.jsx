import React, { useState } from "react";

const Header = ({ setAddList, addList }) => {
  const [gelenInput, setGelenInput] = useState("");


  const handleInput = (e) => {
    e.preventDefault();
    setAddList([
      ...addList,
      {
        id: new Date().getTime(),
        note: gelenInput,
      }
    ]);


 
  };
  return (
    <div>
      <form className="header">
        <input type="text" onChange={(e) => setGelenInput(e.target.value)} />
        <button type="submit" onClick={handleInput} className="addBtn">
          +
        </button>
      </form>
    </div>
  );
};

export default Header;
