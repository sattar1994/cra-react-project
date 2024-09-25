import React from "react";

const Lists = ({ item, deletItem, handelTogl }) => {
    
  return (
    <>
      <li>
        <input type="checkbox" value={item.packed} onChange={()=>{handelTogl(item.id )}} />
        <span style={item.packed ? {textDecoration: "line-through"} : {}}>
          {item.quantity} {item.description}
        </span>
        <button onClick={()=>deletItem(item)}>❌</button>
      </li>
    </>
  );
};

export default Lists;
