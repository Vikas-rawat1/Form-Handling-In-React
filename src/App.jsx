// import React, { useState } from "react";
// import Cards from "./components/Cards";
// import Form from "./components/Form";

// function App() {
//   const [users, setUser] = useState([]);

//   const handleFormSubmitData = (data) => {
//     setUser([...users, data]);
//   };

//   const handleRemove = (id) => {
//     setUser(() => users.filter((item, index) => index != id));
//   };
//   return (
//     <>
//       <div className="bg-zinc-200 w-full h-screen flex justify-center items-center gap-4">
//         <div className="mx-auto">
//           {/* {user.map(() => {
//             return <Cards />;
//           })} */}
//           <Cards users={users} handleRemove={handleRemove} />

//           <Form handleFormSubmitData={handleFormSubmitData} />
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;

import React from "react";
import AppMain from "../formhandling/AppMain";

function App() {
  return (
    <>
      <AppMain />
    </>
  );
}

export default App;
