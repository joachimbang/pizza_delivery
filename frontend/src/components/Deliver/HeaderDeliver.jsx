import { Link } from "react-router";
import CardModal from "../../pages/User/CardModal";
import { useState } from "react";

const HeaderDeliver = () => {
  return (
    <div className="fixed top-0 right-0 p-4 flex justify-end ml-64 w-[calc(100%-16rem)] z-50 bg-white shadow">
      {/* Avatar Dropdown */}
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <img
              alt="User avatar"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-white text-black rounded-box z-[1] mt-3 w-52 p-2 shadow"
        >
          <li>
            <Link to="/profile/deliver" className="justify-between">
              Profile 
            </Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderDeliver;
