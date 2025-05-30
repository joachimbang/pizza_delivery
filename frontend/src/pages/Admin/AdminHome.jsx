import React from "react";
import { Link } from "react-router-dom";
import AsideAdmin from "../../components/admin/AsideAdmin";
import HeaderAdmin from "../../components/admin/HeaderAdmin";
import Graphic from "../../components/admin/Graphic";
import Statistic from "../../components/admin/Statistic";

const AdminHome = () => {
  return (
    <div className="flex h-screen bg-gradient-to-br from-[#f0f4f8] to-[#dbe5ed]">
      <AsideAdmin />
      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <HeaderAdmin />

        <Statistic />

        {/*  */}
        <Graphic />
        {/* Timeline */}
        <section className="bg-white p-4 rounded shadow mb-8">
          <h2 className="text-lg font-semibold mb-2">
            📌 Dernières opérations
          </h2>
          <ul className="space-y-2">
            <li>✅ Prêt accordé à Jean - 2000$</li>
            <li>💸 Paiement de Sophie - 500$</li>
            <li>👤 Utilisateur "Paul" ajouté</li>
          </ul>
        </section>

        {/* Accès rapide */}
        <section className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-4">⚡ Accès rapide</h2>
          <div className="flex flex-wrap gap-4">
            <Link to="/admin/add-loan" className="btn btn-primary">
              ➕ Ajouter un prêt
            </Link>
            <Link to="/admin/add-user" className="btn btn-primary">
              ➕ Ajouter un utilisateur
            </Link>
            <Link to="/admin/users" className="btn btn-secondary">
              🔎 Liste des utilisateurs
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdminHome;
