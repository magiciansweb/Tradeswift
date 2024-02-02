"use client"

import { useForm } from "react-hook-form";


const Transection = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
      const onSubmit = (data) => {
        console.log(data)
      fetch('https://tradeswift-server.vercel.app/deposit',{
        mode: 'no-cors',
        method:"POST",
        headers:{'content-type':'application/json'},
        body:JSON.stringify(data)
      })
      .then( response=>{
        if (!response.ok) {
          return res.text().then(text => { throw new Error(text) })
      }
      else{
        return response.json();
      }
      
    })
      .then(result=>{
        console.log(result)
        window.location.replace(result.url)
      })
      .catch(error => console.error('Fetch error:', error))
      }
        
 
    return (
       <div className="max-w-[600px] mx-auto my-10">
       
         <form className="flex flex-col text-white" onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <label className="font-bold " htmlFor="email">
            Your Email
            </label>
      <input type="email" className="input input-bordered" {...register("email", { required: true })} />
      <label className="font-bold " htmlFor="text">
              Your Name
            </label>
      <input type="text" className="input input-bordered" defaultValue="" {...register("name")} />
      <label className="font-bold " htmlFor="amount">
              Amount
            </label>
      <input type="number" className="input input-bordered" defaultValue="0" {...register("number")} required/>

      {/* include validation with required or other standard HTML validation rules */}
     
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}

      <input className="input input-bordered text-white" type="submit" />
    </form>
       </div>
    );
};

export default Transection;