import { useState } from "react";
import React from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import States from "./States";

const App = () => {
  const [item, setItem] = useState([]);
  const numItem = item.length;
  const handelItems = (i) => {
    setItem([...item, i]);
  
  };
  const deletItem = (items) => {
    const temp = item.filter((item) => {
      return item.id != items.id;
    });
    setItem([...temp]);
   
  };
  const handelTogl = (id) => {
    return setItem((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };
  const clearList = () =>{
   const prompts = prompt("َAre You Sure Delet Full List ?");
   return prompts ? setItem([]) : null
  }
  return (
    <>
      <div className="app">
        <Logo />
        <Form handelItems={handelItems} />
        <PackingList
         clearList={clearList}
          items={item}
          deletItem={deletItem}
          handelTogl={handelTogl}
        />
        <States item={item} numItem={numItem} />
      </div>
    </>
  );
};
export default App;
