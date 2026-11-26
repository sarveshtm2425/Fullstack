import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Login() {
  //const[email, setEmail] = useState("")
  //const[pass, setPass] = useState("")
  const navigate = useNavigate();
  const[formdata, setFormdata] = useState({
    username:"",
    password:""
  })

  function handlechange(e){
    e.preventDefault();
    setFormdata({
      ...formdata,
      [e.target.name]:e.target.value
    })
  }

  const handlesubmit = (event)=>{
    event.preventDefault();
    console.log("login page",formdata)
    alert("Login sucessfull")
    navigate("/dashboard",{
      state:formdata
    })
  }
    return ( 
    <>
      <div>Login</div>
      {/*}
      <input type="email" required placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <input type="password" required placeholder="Enter your password" value={pass} onChange={(e)=>{setPass(e.target.value)} }/>
      <button type="submit" onClick={()=>console.log(email,pass)}>Submit</button>
      <button type="submit" onClick={()=>print()}>Submit</button>
      */}
      
      <form onSubmit={handlesubmit}>
        <input type="text" required placeholder="Enter your username" name="username" value={formdata.username} onChange={handlechange}/>
        <input type="password" required placeholder="Enter your password" name="password" onChange={handlechange }/>
        <button type="submit" >Submit</button>
      </form>
    </>
    
     );
}

export default Login;