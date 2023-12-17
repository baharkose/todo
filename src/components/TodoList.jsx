import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Pagination from "./Pagination";

import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { GrEdit } from "react-icons/gr";
import { IoIosRadioButtonOff } from "react-icons/io";
import { IoIosRadioButtonOn } from "react-icons/io";

const MySwal = withReactContent(Swal);

const TodoList = ({ addList, setAddList }) => {
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); //- sayfanın başlangıç değerini belirledik.
  const itemsPerPage = 4; //- sayfa başına 4 öge getirmek için

  //- Sayfalanmış ögeleri hesaplayalım
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = addList.slice(indexOfFirstItem, indexOfLastItem);

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

  //- hangi not hangisi görüntülemek için
  const [show, setShow] = useState(false);
  const handleToggleSelect = (id) => {
    setSelectedItemId(id);
  };

  return (
    <div className="todoList">
      {currentItems.map(({ id, note }) => (
        <div key={id} className="liste">
          <div
            className="note"
            onClick={() => {
              handleToggleSelect(id);
              setShow(!show);
            }}
          >
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
              {note} ` {id}`
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

      <Pagination
        totalItems={addList.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default TodoList;
