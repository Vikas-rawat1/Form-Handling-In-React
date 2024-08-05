import React from "react";
import { useForm } from "react-hook-form";

function FormMain({ handleFormSubmitData }) {
  const { register, handleSubmit, reset } = useForm();

  const handleFormSubmit = (data) => {
    handleFormSubmitData(data);
    reset();
  };


  return (
    <>
      <div className="mt-10 flex justify-center">
        <form
          action=""
          className="gap-10 flex"
          onSubmit={handleSubmit(handleFormSubmit)}
        >
          <input
            {...register("name")}
            type="text"
            placeholder="name"
            className="rounded-md px-2 py-1 text-base font-semibold outline-none"
          />
          <input
            {...register("email")}
            type="Email"
            placeholder="email"
            className="rounded-md px-2 py-1 text-base font-semibold outline-none"
          />
          <input
            {...register("about")}
            type="About"
            placeholder="about"
            className="rounded-md px-2 py-1 text-base font-semibold outline-none"
          />
          <input
            {...register("image")}
            type="url"
            placeholder="image url"
            className="rounded-md px-2 py-1 text-base font-semibold outline-none"
          />
          <input type="submit" className="bg-blue-500 px-2 py-1 rounded-lg" />
        </form>
      </div>
    </>
  );
}

export default FormMain;
