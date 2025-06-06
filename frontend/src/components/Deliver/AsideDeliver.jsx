import React from "react";
import { Link } from "react-router";

const AsideDeliver = () => {
  return (
    <aside className="w-64 bg-white shadow-md p-4 space-y-4 min-h-screen">
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
          to="/admin/add-loan"
          className={({ isActive }) =>
            `block font-medium px-4 py-2 rounded ${
              isActive ? "bg-primary text-white" : "text-primary"
            }`
          }
        >
          Listes de commandes
        </NavLink>

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
    </aside>
  );
};

export default AsideDeliver;
