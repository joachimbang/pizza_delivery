import React from "react";
import { Link } from "react-router-dom";
import AsideAdmin from "../../components/admin/AsideAdmin";
import HeaderAdmin from "../../components/admin/HeaderAdmin";

const ListClient = () => {
  return (
    <div className="flex h-screen bg-gradient-to-br from-[#f0f4f8] to-[#dbe5ed]">
      <AsideAdmin />
      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <HeaderAdmin />


        {/*  */}
        
        {/* Timeline */}
        <section className="bg-white p-4 rounded shadow mb-8 mt-20">
          <h2 className="text-lg font-semibold mb-2">
            📌 Dernières opérations
          </h2>
          <ul className="space-y-2">
            <li>✅ Prêt accordé à Jean - 2000$</li>
            <li>💸 Paiement de Sophie - 500$</li>
            <li>👤 Utilisateur "Paul" ajouté</li>
          </ul>
        </section>
      </main>
    </div>
  );
};



export default ListClient;
