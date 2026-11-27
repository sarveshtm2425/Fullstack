import { Link, Outlet } from "react-router-dom";

function Admin(){
    return(
        <div>
            <h1>Admin Page</h1>
            <nav>
                <Link to={"/admin/dashboard"}  >dashboard</Link>
                <Link to={"/admin/details"}  > User details</Link>
                <Link to={"/admin/settings"}  >Setiings</Link>
            </nav>
            <Outlet/>
        </div>
    )
}
export default Admin;