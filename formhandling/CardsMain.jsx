import React from "react";
import CardMain from "./CardMain";

function CardsMain({ users, handleRemove }) {
  return (
    <div className="w-full max-h-96 overflow-auto p-4 flex justify-center gap-4 flex-wrap ">
      {users.map((item, index) => (
        <CardMain
          key={index}
          id={index}
          users={item}
          handleRemove={handleRemove}
          // key={index}
        />
      ))}
    </div>
  );x
}

export default CardsMain;
