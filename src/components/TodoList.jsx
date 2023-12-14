import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { GrEdit } from "react-icons/gr";
import { IoIosRadioButtonOff } from "react-icons/io";

const MySwal = withReactContent(Swal);
const TodoList = ({ addList, setAddList }) => {
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(addList));
  }, [addList]);

  const handleSil = (id) => {
    setAddList(addList.filter((item) => item.id !== id));
  };

  const updateList = (id, yeniNot) => {
    setAddList(
      addList.map((item) => {
        if (item.id === id) {
          return { ...item, note: yeniNot };
        }
        return item;
      })
    );
  };

  const handleDuzenle = (id) => {
    const secilenItem = addList.find((item) => item.id === id);

    MySwal.fire({
      title: "Edit selected note",
      input: "text",
      inputValue: secilenItem.note,
      showCancelButton: true,
      confirmButtonText: "Save",
      cancelButtonText: "Cancel",
      customClass: {
        confirmButton: "custom-confirm-button-class", // Onay butonunun sınıfı
        cancelButton: "custom-cancel-button-class", // İptal butonunun sınıfı
      },
      inputValidator: (value) => {
        if (!value) {
          return "Değer girmelisiniz!";
        }
      },
    }).then((result) => {
      if (result.value) {
        updateList(id, result.value);
      }
    });
  };

  return (
    <div className="todoList">
      {addList.map(({ id, note }) => (
        <div key={id} className="liste">
          <div className="note"><IoIosRadioButtonOff /> <span className="noteText">{note}</span> </div>
          <div className="buttons">
            {" "}
            <button onClick={() => handleSil(id)} className="silBtn">
              <RiDeleteBin5Fill />
            </button>
            <button className="duzenBtn" onClick={() => handleDuzenle(id)}>
              <GrEdit />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
