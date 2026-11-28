import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Dashboard() {
    const location = useLocation();
    const[userdata, setUserdata] = useState("");
   /* function displaydata(){
        setUserdata(location.state);
        console.log(userdata)
    }    
*/
    const [count, setCount]=useState(0);
    useEffect(()=>{
        setUserdata(location.state)
        console.log(userdata    )
    },)
    return ( 
        <>
            <button onClick={()=> setCount(count + 1)}>submit</button>
        </>
     );
}

export default Dashboard;