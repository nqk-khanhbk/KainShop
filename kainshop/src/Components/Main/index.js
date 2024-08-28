import { Outlet } from "react-router-dom";
import "./Main.scss";
function Main(){
    return (
        <>
        <div className="main">
            <Outlet />
        </div>
        </>
    )
}
export default Main;