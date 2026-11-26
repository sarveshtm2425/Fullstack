import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { registerschema } from "../components/Formschema/registerschema";

function register(){
    const navigate=useNavigate();
    const {register, handleSubmit, formState:{errors}}=useForm({
            resolver: zodResolver(registerschema)
    })
    function onSubmit1(data){
        console.log(data)
        alert("register sucess")
        navigate("/")
    }
    return(
        <form onSubmit={handleSubmit(onSubmit1)}>
        <input type="text" required placeholder="Enter your name" {...register("name")}/>
        <p>{errors.name?.message}</p>
        <input type="email" required placeholder="Enter your email" {...register("email")}/>
        <p>{errors.email?.message}</p>
        <input type="password" required placeholder="Enter your password" {...register("password")}/>
        <p>{errors.password?.message}</p>
        <input type="number" required placeholder="Enter your age" {...register("age")}/>
        <p>{errors.age?.message}</p>
        <button type="submit">Submit</button>
      </form>
    )
}
export default register