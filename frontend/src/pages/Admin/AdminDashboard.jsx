import React from "react";
import { Link } from "react-router-dom";
import AsideAdmin from "../../components/admin/AsideAdmin";
import HeaderAdmin from "../../components/admin/HeaderAdmin";
import Graphic from "../../components/admin/Graphic";
import Statistic from "../../components/admin/Statistic";
import { motion } from "framer-motion";

const AdminDashboard = () => {
  return (
    <div className="flex h-screen bg-gradient-to-br from-[#f0f4f8] to-[#dbe5ed]">
        
      <AsideAdmin />
      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <HeaderAdmin />
<motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  ><Statistic /></motion.div>
        <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 1 }}
    transition={{ duration: 1 }}
  ><Graphic /></motion.div>

        {/*  */}
        <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 1 }}
    transition={{ duration: 1.5 }}
  ><section className="bg-white p-4 rounded shadow mb-8">
          <h2 className="text-lg font-semibold mb-2">
            📌 Dernières opérations
          </h2>
          <ul className="space-y-2">
            <li>✅ Prêt accordé à Jean - 2000$</li>
            <li>💸 Paiement de Sophie - 500$</li>
            <li>👤 Utilisateur "Paul" ajouté</li>
          </ul>
        </section></motion.div>
        {/* Timeline */}
        

        {/* Accès rapide */}

        <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 1 }}
    transition={{ duration: 2 }}
  ><section className="bg-white p-4 rounded shadow">
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
        </section></motion.div>
        
      </main>
    </div>
  );
};

export default AdminDashboard;
