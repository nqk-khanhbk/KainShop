import "./navBar.scss";
import { FaSearch } from "react-icons/fa";
import { useRef, useState } from "react";

function Search (){
    const [isActive,setActive ] = useState(false);
    const inputRef = useRef();
   
    // inputRef.current.focus();
    const handleClick = ()=>{
        setActive(!isActive);
    }
    return (
        <>
        <div className="search">
            <div className={`search__group ${isActive ? 'active' : ''}`}>
                <input ref={inputRef} type="text" className="input" placeholder="Nhập nội dung tìm kiếm..." />
                 <button onClick={handleClick} className={`btn ${isActive ? 'active' : ''}`}>
                    <FaSearch />
                </button>
            </div>
        </div>
        </>
    )
}
export default Search;