import { Link, NavLink } from "react-router";
import { useState } from "react";
import { Menu } from "lucide-react";

const HeaderClient = () => {
  const [isOpen, setIsOpen] = useState(false); // ✅ État pour ouvrir/fermer le modal

  
// useState
  return (
    <div className="fixed top-0 right-0 p-4 flex justify-end w-full md:w-[calc(100%-16rem)] z-50 bg-white shadow">
      <div className="drawer md:hidden">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer" className="btn  drawer-button">
            <Menu />
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <li>
              <NavLink
                to="/admin/home"
                className={({ isActive }) =>
                  `block font-medium px-4 py-2 rounded ${
                    isActive ? "bg-primary text-white" : "text-primary"
                  }`
                }
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/listcommand"
                className={({ isActive }) =>
                  `block font-medium px-4 py-2 rounded ${
                    isActive ? "bg-primary text-white" : "text-primary"
                  }`
                }
              >
                Listes de commandes
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/add-user"
                className={({ isActive }) =>
                  `block font-medium px-4 py-2 rounded ${
                    isActive ? "bg-primary text-white" : "text-primary"
                  }`
                }
              >
                Ajouter un utilisateur
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/ListUser"
                className={({ isActive }) =>
                  `block font-medium px-4 py-2 rounded ${
                    isActive ? "bg-primary text-white" : "text-primary"
                  }`
                }
              >
                Liste des utilisateurs
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
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
            <NavLink
              to="/profile/admin"
              className={({ isActive }) =>
                `block font-medium px-4 py-2 rounded ${
                  isActive ? "bg-primary text-white" : "text-primary"
                }`
              }
            >
              
              Profile
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/logout"
              className={({ isActive }) =>
                `block font-medium px-4 py-2 rounded ${
                  isActive ? "bg-primary text-white" : "text-primary"
                }`
              }
            >
              Logut
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderClient;
