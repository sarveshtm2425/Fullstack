import { useState } from 'react'

function Login(){
    const [Name, setName] = useState(" ")
    const [Email, setEmail] = useState(" ")
    const [Pass, setPass] = useState(" ")
    const formsubmit = (e)=>{
      e.preventDefault()
      console.log("Name: "+Name+"\n"+"Email: "+ Email+"\n"+"Password: "+Pass)
    }
    return(
        <div>
        <div className="text-red-500"> hello </div>
        <form onSubmit ={ (e)=>formsubmit(e)} >
            <input type="text" required placeholder="Enter your name" value={Name} onChange={(e) => setName(e.target.value)}></input>
            <input type="email" required placeholder="Enter your email" value={Email} onChange={(e) => setEmail(e.target.value)}></input>
            <input type="password" required placeholder="Enter your password" value={Pass} onChange={(e) => setPass(e.target.value)}></input>
            <button type="submit" >Submit</button>
        </form>

        </div>
    )

}
export default Login