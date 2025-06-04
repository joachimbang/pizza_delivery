import React from "react";
import { Link } from "react-router";

const AsideAdmin = () => {
  return (
    <aside className=" w-64 bg-white shadow-md p-4 space-y-4">
      <h2 className="text-2xl font-bold text-primary"><Link to={"/admin/home"}>Dashboard</Link></h2>
      <nav className="space-y-2">
        <Link to="/admin/home" className="block text-primary font-medium">
          Home
        </Link>
        <Link to="/admin/add-loan" className="block text-primary font-medium">
          Ajouter un prêt
        </Link>
        <Link to="/admin/add-user" className="block text-primary font-medium">
          Ajouter un utilisateur
        </Link>
        <Link to="/admin/ListUser" className="block text-primary font-medium">
          Liste des utilisateurs
        </Link>
      </nav>
    </aside>
  );
};

export default AsideAdmin;
