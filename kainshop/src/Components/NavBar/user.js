import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import "./user.css";
import { NavLink } from "react-router-dom";

function Users() {
  // State to toggle the visibility of the dropdown
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  // Function to toggle the dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownVisible((prevState) => !prevState);
  };

  return (
    <>
      <div className="users">
        <div className="users__icons" onClick={toggleDropdown}>
          <FaUserCircle />
        </div>
        {isDropdownVisible && (
          <div className="users__content">
            <div className="users__content-title">
                <NavLink to="/users">Thông tin cá nhân</NavLink>
            </div>
            <div className="users__content-title">
                <NavLink to="/logout">Đăng xuất</NavLink>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Users;
