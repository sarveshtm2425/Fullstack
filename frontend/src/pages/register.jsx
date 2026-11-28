import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { registerschema } from "../components/Formschema/registerschema";

function register(){
    const navigate=useNavigate();
    
    const {register, handleSubmit, formState:{errors}}=useForm({
            resolver: zodResolver(registerschema)
    })
    function onSubmit1(data){
        console.log(data)
        alert("register sucess")
        navigate("/",{state:data})
    }
    function Location(data){
        console.log(data)

    }
    return(
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 to-pink-400 p-4">
        <form onSubmit={handleSubmit(onSubmit1)}
            className="w-full border border-black-300 rounded xl max-w-md bg-white p-8 sm:p-8 rounded-2xl shadow-[0px_0px_25px_13px_rgba(228, 49, 199, 1)] shadow-pink-400 flex flex-col gap-1">
            <h1 className="text-2xl font-bold text-center mb-4">Registration Form</h1>    
        <input type="text" required placeholder="Enter your name" {...register("name")} className="w-full border p-3 rounded-3xl"/>
        <p >{errors.name?.message}</p>
        <input type="email" required placeholder="Enter your email" {...register("email")}className="w-full border p-3 rounded-3xl"/>
        <p>{errors.email?.message}</p>
        <input type="password" required placeholder="Enter your password" {...register("password")}className="w-full border p-3 rounded-3xl"/>
        <p>{errors.password?.message}</p>
        <input type="number" required placeholder="Enter your age" {...register("age")}className="w-full border p-3 rounded-3xl"/>
        <p>{errors.age?.message}</p>
        <button type="submit" className="w-full bg-pink-500 text-black p-3 rounded-4xl ">Submit</button>
      </form>
      </div>
    )
}
export default register