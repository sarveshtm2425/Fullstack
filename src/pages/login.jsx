import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";


function Login() {
  //const[email, setEmail] = useState("")
  //const[pass, setPass] = useState("")
  const navigate = useNavigate();
  const location=useLocation();
  const[logindata, setLogindata] = useState({
    username:"",
    password:""
  })
  const registerdata=location.state

  function handlechange(e){
    e.preventDefault();
    setLogindata({
      ...logindata,
      [e.target.name]:e.target.value
    })
  }

  const handlesubmit = (event)=>{
    event.preventDefault();
    console.log("register data",registerdata)
    console.log("login data",logindata)
    if (registerdata.name===logindata.username && registerdata.password===logindata.password){
      console.log("if success")
      navigate("/dashboard",{state:logindata})
      
    }else if (registerdata.name !== logindata.username){
      console.log("invalid username")
      alert("Invalid Username")
    }
    else{
      console.log("invalid password")
      alert("Invalid password")
    }
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
        <input type="text" required placeholder="Enter your username" name="username" onChange={handlechange}/>
        <input type="password" required placeholder="Enter your password" name="password" onChange={handlechange }/>
        <button type="submit" >Submit</button>
      </form>
    </>
    
     );
}

export default Login;