import React, { useState } from "react";
import Swal from "sweetalert2";

const Header = ({ setAddList, addList }) => {
  const [gelenInput, setGelenInput] = useState("");

  const handleInput = (e) => {
    e.preventDefault();
    if (!gelenInput) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please, give a note...",

            customClass: {
              confirmButton: 'custom-confirm-button-class',}
            
          });

    } else {
      setGelenInput("")
      setAddList([
        ...addList,
        {
          id: new Date().getTime(),
          note: gelenInput,
        },
      ]);
    }
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
