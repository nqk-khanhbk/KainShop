import { NavLink } from "react-router-dom";
import "./navBar.scss";
import { useRef } from "react";
function Login (){
    const buttonRef = useRef(null);
    const handleClick = (e) => {
        //khi bấm vào booton login sẽ đăng nhập
        const buttonRect = buttonRef.current.getBoundingClientRect();
        // lấy tọa độ chuột
        const x = e.clientX;
        const y = e.clientY;

        // tính tọa độ chuột click so với button
        const xInside = x - buttonRect.left;
        const yInside = y - buttonRect.top;

        // thêm thẻ span để thêm class circle
        const hinhTron = document.createElement("span");
        hinhTron.classList.add("circle");
        hinhTron.style.top = `${yInside}px`;
        hinhTron.style.left = `${xInside}px`;
        buttonRef.current.appendChild(hinhTron);

        setTimeout(() => hinhTron.remove(), 500);
    };
    return (
        <>
        <div className="login">
              <button className="button__login" onClick={handleClick} ref={buttonRef}>
                <NavLink to="login">Login</NavLink>               
              </button>
                 
        </div>
        </>
    )
}
export default Login;