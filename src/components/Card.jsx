import React from "react";

function Card({ user, handleRemove ,id}) {
  return (
    <>
      <div className="bg-zinc-100 w-60 flex flex-col  items-center max-h-96">
        <div className="image w-12 h-12 rounded-full bg-zinc-200">
          <img
            src={user.image}
            alt=""
            className="w-full h-full object-cover overflow-hidden rounded-full"
          />
        </div>
        <h1 className="mt-1 text-xl font-semibold">{user.name}</h1>
        <h4 className="opacity-60 text-xs font-semibold">{user.email}</h4>
        <p className="mt-2 text-center text-xs font-semibold leading-1 tracking-tight">
          {user.about}
        </p>
        <button
          className="px-3 py-2 mb-4 bg-red-500 text-xs font-semibold text-white rounded-lg mt-4"
          onClick={()=>handleRemove(id)}
        >
          Remove it
        </button>
      </div>
    </>
  );
}

export default Card;
