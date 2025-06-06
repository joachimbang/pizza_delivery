import React from "react";
import { NavLink } from "react-router-dom";

const AsideClient = () => {
  return (
    <aside className="hidden md:block w-64 bg-white shadow-md p-4 space-y-4 min-h-screen">
      <h2 className="text-2xl font-bold text-primary pb-8">
        <NavLink to="/admin/home">Logo</NavLink>
      </h2>

      <nav className="space-y-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `block font-medium px-4 py-2 rounded ${
              isActive ? "bg-primary text-white" : "text-primary"
            }`
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/client/add-loan"
          className={({ isActive }) =>
            `block font-medium px-4 py-2 rounded ${
              isActive ? "bg-primary text-white" : "text-primary"
            }`
          }
        >
          Listes de commandes
        </NavLink>

        <NavLink
          to="/client/add-user"
          className={({ isActive }) =>
            `block font-medium px-4 py-2 rounded ${
              isActive ? "bg-primary text-white" : "text-primary"
            }`
          }
        >
          Passer une commandes
        </NavLink>

        <NavLink
          to="/client/listpizza"
          className={({ isActive }) =>
            `block font-medium px-4 py-2 rounded ${
              isActive ? "bg-primary text-white" : "text-primary"
            }`
          }
        >
          Liste des Pizza
        </NavLink>
      </nav>
    </aside>
  );
};

export default AsideClient;
