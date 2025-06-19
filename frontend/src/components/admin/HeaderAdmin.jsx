import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Menu } from "lucide-react";
import { AppContent } from "../../context/AppContent";
import { toast } from "react-toastify";
import axios from "axios";

const HeaderAdmin = () => {
  const navigate = useNavigate();
  const { userData, backendUrl, setUserData, setIsLoggedin, loadingUser } =
    useContext(AppContent);

  const logout = async () => {
    try {
      axios.defaults.withCredentials = true;
      const { data } = await axios.post(backendUrl + "/auth/logout");
      if (data.success) {
        setIsLoggedin(false);
        setUserData(false);
        navigate("/login");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // 🟡 Affiche un état de chargement
  if (loadingUser) {
    return (
      <div className="fixed top-0 right-0 p-4 w-full md:w-[calc(100%-16rem)] z-50 bg-white shadow">
        <p className="text-sm text-gray-500">Chargement...</p>
      </div>
    );
  }

  return (
    <div className="fixed top-0 right-0 p-4 flex justify-end w-full md:w-[calc(100%-16rem)] z-50 bg-white shadow">
      {userData ? (
        <>
          {/* Drawer mobile */}
          {/* ... reste inchangé ... */}

          {/* Avatar + nom admin */}
          <div className="dropdown dropdown-end flex items-baseline">
            <p className="mr-2">{userData?.name ?? "Admin"}</p>
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
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
                <NavLink to="/profile/admin" className={({ isActive }) =>
                  `block font-medium px-4 py-2 rounded ${
                    isActive ? "bg-primary text-white" : "text-primary"
                  }`
                }>
                  Profile
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/logout"
                  onClick={(e) => {
                    e.preventDefault();
                    logout();
                  }}
                  className={({ isActive }) =>
                    `block font-medium px-4 py-2 rounded ${
                      isActive ? "bg-primary text-white" : "text-primary"
                    }`
                  }
                >
                  Logout
                </NavLink>
              </li>
            </ul>
          </div>
        </>
      ) : (
        <div className="flex items-center text-gray-500">login</div>
      )}
    </div>
  );
};

export default HeaderAdmin;
