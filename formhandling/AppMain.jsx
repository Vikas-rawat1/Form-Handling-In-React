import React, { useState } from "react";
import CardsMain from "./CardsMain";
import FormMain from "./FormMain";

function AppMain() {
  const [users, setUsers] = useState([]);

  const handleFormSubmitData = (data) => {
    setUsers([...users, data]);
  };
  const handleRemove = (id) => {
    setUsers(() => users.filter((item, index) => index != id));
  };
  return (
    <>
      <div className="w-full h-screen bg-zinc-200 flex items-center justify-center">
        <div className="container mx-auto">
          <CardsMain users={users} handleRemove={handleRemove} />
          <FormMain handleFormSubmitData={handleFormSubmitData} />
        </div>
      </div>
    </>
  );
}

export default AppMain;
