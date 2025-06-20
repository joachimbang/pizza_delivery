

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import DialogUserInfo from "../../pages/Admin/DialogUserInfo";
import { SquarePen, History } from "lucide-react";
import AsideAdmin from "../../components/admin/AsideAdmin";
import HeaderAdmin from "../../components/admin/HeaderAdmin";
import TitleFilterAdmin from "../../components/admin/TitleFilterAdmin";

const RolesBadge = ({ roles }) => {
  let bgColor = "";
  let textColor = "";

  switch (roles.toLowerCase()) {
    case "deliver":
      bgColor = "bg-green-100";
      textColor = "text-green-700";
      break;
    case "client":
      bgColor = "bg-yellow-100";
      textColor = "text-yellow-800";
      break;

    default:
      bgColor = "bg-gray-100";
      textColor = "text-gray-700";
  }

  return (
    <span
      className={`px-3 py-1 rounded-full text-sm font-medium ${bgColor} ${textColor} capitalize`}
    >
      {roles}
    </span>
  );
};

const ListUser = () => {
  const users = [
    {
      id: 1,
      photo:
        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
      name: "Cy Ganderton",
      email: "cy@example.com",
      roles: "client",
    },
    {
      id: 2,
      photo:
        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
      name: "Hart Hagerty",
      email: "hart@example.com",
      roles: "deliver",
    },
    {
      id: 3,
      photo:
        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
      name: "Brice Swyre",
      email: "brice@example.com",
      roles: "client",
    },
    {
      id: 4,
      photo:
        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
      name: "Jean Dupont",
      email: "jean@example.com",
      roles: "client",
    },
    {
      id: 5,
      photo:
        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
      name: "Fatou Dia",
      email: "fatou@example.com",
      roles: "deliver",
    },
    {
      id: 1,
      photo:
        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
      name: "Cy Ganderton",
      email: "cy@example.com",
      roles: "client",
    },
    {
      id: 2,
      photo:
        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
      name: "Hart Hagerty",
      email: "hart@example.com",
      roles: "deliver",
    },
    {
      id: 3,
      photo:
        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
      name: "Brice Swyre",
      email: "brice@example.com",
      roles: "client",
    },
    {
      id: 4,
      photo:
        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
      name: "Jean Dupont",
      email: "jean@example.com",
      roles: "client",
    },
    {
      id: 5,
      photo:
        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
      name: "Fatou Dia",
      email: "fatou@example.com",
      roles: "deliver",
    },
    {
      id: 1,
      photo:
        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
      name: "Cy Ganderton",
      email: "cy@example.com",
      roles: "client",
    },
    {
      id: 2,
      photo:
        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
      name: "Hart Hagerty",
      email: "hart@example.com",
      roles: "deliver",
    },
    {
      id: 3,
      photo:
        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
      name: "Brice Swyre",
      email: "brice@example.com",
      roles: "client",
    },
    {
      id: 4,
      photo:
        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
      name: "Jean Dupont",
      email: "jean@example.com",
      roles: "client",
    },
    {
      id: 5,
      photo:
        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
      name: "Fatou Dia",
      email: "fatou@example.com",
      roles: "deliver",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const goToHistoricByUser = () => {
    navigate("/admin/historicbyuser");
  };

  return (
    <>
      <div className="flex h-screen bg-gradient-to-br from-[#f0f4f8] to-[#dbe5ed]">
        <AsideAdmin />
        {/* Main Content */}
        <main className="bg-white rounded shadow mb flex-1 p-6 overflow-y-auto">
          {/* <h2 className="text-lg font-semibold mb-4">Users</h2> */}
          <TitleFilterAdmin title={"Users"} />
          <HeaderAdmin />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 1 }}
            transition={{ duration: 1.5 }}
          >
            <div className="overflow-x-auto">
              <table className="min-w-full table table-zebra">
                <thead>
                  <tr className="text-left border-b">
                    <th className="py-2 px-4"></th>
                    <th className=" py-2 px-4">Photo</th>
                    <th className="py-2 px-4">Nom</th>
                    <th className="py-2 px-4">Email</th>
                    <th className="py-2 px-4">Roles</th>
                    <th className="py-2 px-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((usr, index) => (
                    <tr key={usr.id} className="border-b hover:bg-gray-50">
                      <td className="py-2 px-4">{index + 1}</td>
                      <td className="px-2 py-4">
                        <img
                          alt="User avatar"
                          src={usr.photo}
                          className="w-10 rounded-full"
                        />
                      </td>
                      <td className="py-2 px-4">{usr.name}</td>
                      <td className="py-2 px-4">{usr.email}</td>

                      <td className="py-2 px-4">
                        <RolesBadge roles={usr.roles} />
                      </td>
                      <td className="py-2 px-4">
                        <button
                          className="btn btn-square btn-ghost"
                          onClick={() => setIsOpen(true)}
                        >
                          <SquarePen />
                        </button>
                        <button
                          onClick={goToHistoricByUser}
                          className="btn btn-square btn-ghost"
                        >
                          <History />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex justify-end pt-3 pr-2">
                <Link className="text-blue-600 hover:underline text-sm" to="#">
                  Voir plus...
                </Link>
              </div>
            </div>
          </motion.div>
        </main>
      </div>
      <DialogUserInfo isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default ListUser;


// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Link, useNavigate } from "react-router-dom";
// import DialogUserInfo from "../../pages/Admin/DialogUserInfo";
// import { SquarePen, History } from "lucide-react";
// import AsideAdmin from "../../components/admin/AsideAdmin";
// import HeaderAdmin from "../../components/admin/HeaderAdmin";
// import TitleFilterAdmin from "../../components/admin/TitleFilterAdmin";
// import axios from "axios";

// const RolesBadge = ({ roles }) => {
//   let bgColor = "";
//   let textColor = "";

//   switch (roles.toLowerCase()) {
//     case "deliver":
//       bgColor = "bg-green-100";
//       textColor = "text-green-700";
//       break;
//     case "client":
//       bgColor = "bg-yellow-100";
//       textColor = "text-yellow-800";
//       break;

//     default:
//       bgColor = "bg-gray-100";
//       textColor = "text-gray-700";
//   }

//   return (
//     <span
//       className={`px-3 py-1 rounded-full text-sm font-medium ${bgColor} ${textColor} capitalize`}
//     >
//       {roles}
//     </span>
//   );
// };

// const ListUser = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [isOpen, setIsOpen] = useState(false);
//   const navigate = useNavigate();

//   const goToHistoricByUser = () => {
//     navigate("/admin/historicbyuser");
//   };

//   useEffect(() => {
//     // Remplace cette URL par celle de ton API
//     const fetchUsers = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.post("http://localhost:4001/api/user/list-users"); 
//         // adapte le endpoint selon ton API
//         if (response.data.success) {
//           setUsers(response.data.users); // adapte selon ta réponse API
//         } else {
//           setError("Failed to load users");
//         }
//       } catch (err) {
//         setError(err.message || "An error occurred");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUsers();
//   }, []);

//   if (loading) return <div>Loading users...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <>
//       <div className="flex h-screen bg-gradient-to-br from-[#f0f4f8] to-[#dbe5ed]">
//         <AsideAdmin />
//         <main className="bg-white rounded shadow mb flex-1 p-6 overflow-y-auto">
//           <TitleFilterAdmin title={"Users"} />
//           <HeaderAdmin />
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 1 }}
//             transition={{ duration: 1.5 }}
//           >
//             <div className="overflow-x-auto">
//               <table className="min-w-full table table-zebra">
//                 <thead>
//                   <tr className="text-left border-b">
//                     <th className="py-2 px-4"></th>
//                     <th className=" py-2 px-4">Photo</th>
//                     <th className="py-2 px-4">Nom</th>
//                     <th className="py-2 px-4">Email</th>
//                     <th className="py-2 px-4">Roles</th>
//                     <th className="py-2 px-4">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {users.map((usr, index) => (
//                     <tr key={usr.id || index} className="border-b hover:bg-gray-50">
//                       <td className="py-2 px-4">{index + 1}</td>
//                       <td className="px-2 py-4">
//                         <img
//                           alt="User avatar"
//                           src={usr.photo || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
//                           className="w-10 rounded-full"
//                         />
//                       </td>
//                       <td className="py-2 px-4">{usr.name}</td>
//                       <td className="py-2 px-4">{usr.email}</td>

//                       <td className="py-2 px-4">
//                         <RolesBadge roles={usr.roles} />
//                       </td>
//                       <td className="py-2 px-4">
//                         <button
//                           className="btn btn-square btn-ghost"
//                           onClick={() => setIsOpen(true)}
//                         >
//                           <SquarePen />
//                         </button>
//                         <button
//                           onClick={goToHistoricByUser}
//                           className="btn btn-square btn-ghost"
//                         >
//                           <History />
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//               <div className="flex justify-end pt-3 pr-2">
//                 <Link className="text-blue-600 hover:underline text-sm" to="#">
//                   Voir plus...
//                 </Link>
//               </div>
//             </div>
//           </motion.div>
//         </main>
//       </div>
//       <DialogUserInfo isOpen={isOpen} onClose={() => setIsOpen(false)} />
//     </>
//   );
// };

// export default ListUser;
