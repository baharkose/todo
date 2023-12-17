import React, { useState } from "react";
import Swal from "sweetalert2";

const Header = ({ setAddList, addList }) => {
  const [gelenInput, setGelenInput] = useState("");
  const [counter, setCounter] = useState(1);


  const handleInput = (e) => {
    e.preventDefault();
    if (!gelenInput) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please, give a note...",

        customClass: {
          confirmButton: "custom-confirm-button-class",
        },
      });
    } else {
      setGelenInput("");
      const newId = counter; 
      setCounter(counter + 1);
      setAddList([
        ...addList,
        {
          id: newId ,
          note: gelenInput,
        },
      ]);
    }
  };
  return (
    <div>
      <form className="header">
        <input type="text" value={gelenInput} onChange={(e) => setGelenInput(e.target.value)} />
        <button type="submit" onClick={handleInput} className="addBtn">
          +
        </button>
      </form>
    </div>
  );
};

export default Header;
