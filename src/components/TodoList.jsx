import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { GrEdit } from "react-icons/gr";
import { IoIosRadioButtonOff } from "react-icons/io";
import { IoIosRadioButtonOn } from "react-icons/io";
import { AiFillCaretLeft } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";


const MySwal = withReactContent(Swal);

const TodoList = ({ addList, setAddList }) => {
  const [selectedItemId, setSelectedItemId] = useState(null);

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
      //- buton renkleri için class ataması yapıldı
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

  const [show, setShow] = useState(false);
  const handleToggleSelect = (id) => {
    setSelectedItemId(id);
  };

  

  return (
    <div className="todoList">
      {addList.map(({ id, note }) => (
        <div
          key={id}
          className="liste"
          onClick={() => {
            handleToggleSelect(id);
            setShow(!show);
          }}
        >
          <div className="note">
            {selectedItemId === id && show ? (
              <IoIosRadioButtonOn />
            ) : (
              <IoIosRadioButtonOff />
            )}{" "}
            <span
              className="noteText"
              style={{
                textDecoration:
                  selectedItemId === id && show ? "line-through" : "none",
              }}
            >
              {note}
            </span>{" "}
          </div>
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

      <div className="nextAndBack">
      <AiFillCaretLeft className="left"/>
      <AiFillCaretRight className="right"/>
      </div>
    </div>
  );
};

export default TodoList;