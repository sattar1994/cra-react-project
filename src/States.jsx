import React from "react";

const States = ({numItem, item}) => {
  const numPacked = item.filter((item)=> item.packed).length;
  const person = Math.round((numPacked / numItem) * 100);
  return (
    <>
      <footer className="stats">
        {item.length === 0 ? <h2>Start Adds Items</h2> : person === 100 ? 'You Ready For Go To Away ❤😍' :  <em>😍 You have <span>{numItem} </span> items on your list, and you already packed <span>{numPacked}</span> ({person}%) </em>}
      {/* {person === 100 ? 'You Ready For Go To Away ❤😍' :  <em>😍 You have <span>{numItem} </span> items on your list, and you already packed <span>{numPacked}</span> ({person}%) </em>} */}
         
      </footer>
    </>
  );
};

export default States;
