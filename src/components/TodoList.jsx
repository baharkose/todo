import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { GrEdit } from "react-icons/gr";


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
        title: "Öğeyi Düzenle",
        input: "text",
        inputValue: secilenItem.note,
        showCancelButton: true,
        confirmButtonText: "Kaydet",
        cancelButtonText: "İptal",
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
      <div>
        {addList.map(({ id, note }) => (
          <p key={id}>
            {note}
            <button onClick={() => handleSil(id)} className="silBtn"><RiDeleteBin5Fill />

</button>
            <button className="duzenBtn" onClick={() => handleDuzenle(id)}><GrEdit />


</button>
          </p>
        ))}
      </div>
    );
  };
  
  export default TodoList;