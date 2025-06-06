// Ajoute en haut
import { useState } from "react";
import DialogAddUser from "../../pages/Admin/DialogAddUser";
import { NavLink } from "react-router";

const AsideAdmin = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <aside className="hidden md:block w-64 bg-white shadow-md p-4 space-y-4 min-h-screen">
      <h2 className="text-2xl font-bold text-primary pb-8">
        <NavLink to="/admin/home">Logo</NavLink>
      </h2>

      <nav className="space-y-6">
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

        <NavLink
          to="/admin/listcommand"
          className={({ isActive }) =>
            `block font-medium px-4 py-2 rounded ${
              isActive ? "bg-primary text-white" : "text-primary"
            }`
          }
        >
          Listes des commandes
        </NavLink>

        {/* Remplace NavLink par un bouton */}
        <button
          onClick={() => setIsDialogOpen(true)}
          className="block font-medium px-4 py-2 rounded text-left w-full text-primary hover:bg-primary hover:text-white"
        >
          Ajouter un utilisateur
        </button>

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
      </nav>

      {/* Le dialog modal pour ajouter un utilisateur */}
      <DialogAddUser
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
      
    </aside>
  );
};

export default AsideAdmin;