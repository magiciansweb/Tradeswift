import React from "react";
import { useForm } from "react-hook-form";
<<<<<<< HEAD

const Deposit = () => {
=======
import UseAxios from "../Hooks/UseAxios";

const Deposit = () => {
  const axios=UseAxios();
>>>>>>> master
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
<<<<<<< HEAD
    fetch("https://tradeswift-server.vercel.app/payment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      // .then( response=>response.json())
      .then((result) => {
        console.log(result, result.url);
        window.location.replace(result.url);
      });
=======
      axios.post('http://localhost:5000/paymentsystem',data)
      .then(res=>{
        console.log(res.data.url);
        window.location.replace(res.data.url);
      })
    
>>>>>>> master
  };

  return (
    <div className="max-w-[600px] lg:min-h-screen px-9 my-10 border-x-2 border-dotted  border-[#353A4D]">
      <h2 className="text-2xl my-3 font-bold text-center">
<<<<<<< HEAD
        Please fill up the form to deposit
=======
        Please fill up the form to transection
>>>>>>> master
      </h2>
      <form
        className="flex flex-col text-white"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* register your input into the hook by invoking the "register" function */}
        <label className="font-bold " htmlFor="email">
          Your Email
        </label>
        <input
          type="email"
          className="input input-bordered"
          {...register("email", { required: true })}
        />
        <label className="font-bold " htmlFor="text">
          Your Name
        </label>
        <input
          type="text"
          className="input input-bordered"
          defaultValue=""
          {...register("name")}
        />
        <label className="font-bold " htmlFor="text">
          Type
        </label>
        <input
          type="text"
          className="input input-bordered"
          defaultValue=""
          {...register("type")}
        />
        <label className="font-bold " htmlFor="amount">
          Amount
        </label>
        <input
          type="number"
          className="input input-bordered"
          defaultValue="0"
          {...register("amount")}
          required
        />

        {/* include validation with required or other standard HTML validation rules */}

        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <input
          className="input input-bordered text-white"
          value={"Deposit"}
          type="submit"
        />
      </form>
    </div>
  );
};

export default Deposit;
