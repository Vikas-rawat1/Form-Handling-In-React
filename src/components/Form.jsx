import React from "react";
import { useForm } from "react-hook-form";

function Form({ handleFormSubmitData }) {
  const { register, handleSubmit, reset } = useForm();

  const handleFormSubmit = (data) => {
    handleFormSubmitData(data);
    reset(); // reset form data after submission
  };

  return (
    <>
      <div className="mt-10 flex justify-center ">
        <form
          className="flex justify-center items-center gap-10"
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
            type="text"
            placeholder="email"
            className="rounded-md px-2 py-1 text-base font-semibold outline-none"
          />{" "}
          <input
            {...register("about")}
            type="text"
            placeholder="About"
            className="rounded-md px-2 py-1 text-base font-semibold outline-none"
          />
          <input
            {...register("image")}
            type="text"
            placeholder="image url"
            className="rounded-md px-2 py-1 text-base font-semibold outline-none"
          />
          <input type="submit" className="bg-blue-500 px-2 py-1 rounded-lg" />
        </form>
      </div>
    </>
  );
}

export default Form;
