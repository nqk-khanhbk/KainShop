import { useState } from "react";
import "./Login.css";
import { FaTimes } from "react-icons/fa";
import { ckeckRegister, login, register } from "../../service/userService";
import { setCookie } from "../../helpers/cookies";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ckeckLogin } from "../../Action/login";
import {generateRandomToken} from "../../helpers/generateToken";
function Login (){
    // const [_ ,setShowLogin]= useState(true);
    const navigator = useNavigate();
    const dispatch = useDispatch();
    const [currenState,setCurrenState] = useState("Sign In")

    // cach de dang nhap
    const handleSubmitLogin = async (e)=>{
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;
        // console.log(email,password);
        const respons = await login(email,password);
        if(respons.length > 0){
            setCookie("id",respons[0].id,1);
            setCookie("fullName",respons[0].fullName,1);
            setCookie("email",respons[0].email,1);
            setCookie("token",respons[0].token,1);
            dispatch(ckeckLogin(true));
            navigator("/");
        }
        else{
            alert("Sai tai khoan or mat khau");
        }
    }

    //cach de dky tai khoan
    const handleSubmitRegister = async(e)=>{
        e.preventDefault();
        const fullName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        console.log(fullName,email,password);

        // ham kiem tra xem tai khoan da ton tai chua
        const ckeckDangKy = await ckeckRegister("email",email);
        if(ckeckDangKy.length >0){
            alert("Tai khoan da ton tai");
        }
        else{
            const option = {
                fullName:fullName,
                email:email,
                password:password,
                token:generateRandomToken(),
            };
            const respon = await register(option);
            if(respon){
                alert("Dang ky thanh cong ");
                navigator("/login");
            }
            else{
                alert("Dang ky that bai");
            }
        }
    }
    return (
        <>
        <div className="login">
           <form className="login-container" onSubmit={currenState === "Sign In" ? handleSubmitLogin : handleSubmitRegister}>
            <div className="login-title">
                <h2>{currenState}</h2>
                <div  className="login-down">
                     <FaTimes />
                </div>
            </div>
            <div className="login-input">
                {currenState === "Sign In"?(<></>):<input type="text" placeholder="Your name" required />}             
                <input type="email" placeholder="Your email" required />
                <input type="password" placeholder="Password" required />
            </div>
            <div className="login-condition">
                    <input type="checkbox" required />
                    <p>Nhớ mật khẩu</p>
            </div>
            <button>{currenState === "Sign In" ? "Login":"Create account"}</button>
            
            {currenState === "Sign In"
            ?<p>Create a new account? <span onClick={()=>setCurrenState("Sign Up")}>Click here</span></p>
            :
            <p>Already have an account? <span onClick={()=>setCurrenState("Sign In")}>Login here</span></p>
            }
           </form>
        </div>
        </>
    )
}
export default Login;