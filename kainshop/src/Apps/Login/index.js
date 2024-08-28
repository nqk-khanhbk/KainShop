import { useState } from "react";
import "./Login.css";
import { FaTimes } from "react-icons/fa";
function Login (){
    // const [_ ,setShowLogin]= useState(true);
    const [currenState,setCurrenState] = useState("Sign In")
    return (
        <>
        <div className="login">
           <form className="login-container">
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