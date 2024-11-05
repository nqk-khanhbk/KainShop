import {assets} from "../assets/assets";
import { FaCartPlus } from "react-icons/fa";
import Login from "./login";
import "./navBar.scss";
import { NavLink } from "react-router-dom";
import Search from "./search";
import { useSelector } from "react-redux";
import { getCookie } from "../../helpers/cookies";
import Users from "./user";

function NavBar (){
    const cart = useSelector(state => state.CartReduce);
    const total = cart.reduce((sum,item)=>{
        return sum + item.quality;
    },0);

    const token = getCookie("token");
    const isLogin = useSelector(states=>states.loginReducer);
    console.log(isLogin);
    console.log(token);
    return (
        <>
        <div className="nav">
            <div className="nav__logo">
                <NavLink to="/">
                    <img src={assets.KainShopp} alt="logo"/>
                </NavLink>
                
            </div>
            <ul className="nav__menu">
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/product">Product</NavLink>
                    </li>
                    <li>
                        <NavLink to="/blog">Blog</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contact</NavLink>
                    </li>             
            </ul>
            <div className="right">
                <Search />
                <div className="cart">
                    <NavLink to="/cart" className="cart__icon"> 
                         <FaCartPlus />
                         <div className="cart__icon-total">{total}</div>
                    </NavLink>     
                </div>

                {token ? (
                    <div>
                       <Users />
                    </div>
                ):(
                    <>
                    <Login />
                    </>
                )}
              
            </div>
            
        </div>
        </>
    )
}
export default NavBar;