import React, { useState } from "react";

const TodoList = ({ addList, setAddList }) => {
//   localStorage.setItem("list", JSON.stringify(addList));
  const handleSil = (id) => {
    setAddList(addList.filter((item) => item.id != id));
  };

  const [duzenle, setDuzenle] = useState("");
  const [show, setShow] = useState(true);
  const [secilen, setSecilen] = useState({
    id: "",
    note: "",
  });

  const handleDuzenle = (id) => {
    setDuzenle("");

    setSecilen(addList.find((item) => item.id === id));
    setSecilen({
      id: id,
      note: duzenle,
    });
  };

  //- gelen idy göre güncelle obje listesini güncelleme

  const updateList = (id) => {
    setAddList(
      addList.map((item) => {
        if (item.id === secilen.id) {
          return { ...item, note: duzenle };
        }
        return item;
      })
    );
    setShow(true);
  };

  console.log(secilen);

  return (
    <div>
      <p style={{ display: show ? "none" : "block" }}>
        <input type="text" onChange={(e) => setDuzenle(e.target.value)} />
        <button onClick={updateList}>kaydet</button>
      </p>
      {addList.map(({ id, note }) => (
        <p key={id}>
          {note}
          <button onClick={() => handleSil(id)}>Sil</button>
          <button
            onClick={() => {
              handleDuzenle(id);
              setShow(!show);
            }}
          >
            Düzenle
          </button>
        </p>
      ))}
    </div>
  );
};

export default TodoList;
