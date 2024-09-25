import React from "react";
import Lists from "./Lists.jsx";

const PackingList = ({items, deletItem, handelTogl, clearList}) => {
  return (
    <>
      <div className="list">
        <ul>
          {items.map((item) => {
            return <Lists key={item.id} item={item} deletItem={deletItem} handelTogl={handelTogl} />;
          })}
        </ul>
        <button onClick={()=>clearList()}>Clear List</button>
      </div>
    </>
  );
};

export default PackingList;
