import React from "react";
import { DollarSign, Users ,User2Icon} from 'lucide-react';

const Statistic = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 mt-20 ">
        <StatCard title="📦 Prêts accordés" value="120" />
        <StatCard title="💰 Montant récupéré" value="25,000 $" />
        <StatCard title="🧾 Prêts actifs" icon={User2Icon} value="45" />
        <StatCard title="👤 Utilisateurs" value="300" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8  ">
        <StatCard title="📦 Totales commandes" value="120" />
        <StatCard title="💰 Pizza no delivre" value="50" />
        <StatCard title="👤 Livreurs " value="45" />
        <StatCard title="👤 Clients" value="255" />
      </div>
    </>
  );
};
const StatCard = ({ title, value }) => (
  <div className="bg-white p-4 rounded shadow text-center hover:bg-slate-100 cursor-auto">
    <h3 className="text-lg font-medium mb-2">{title}</h3>
    <p className="text-2xl font-bold text-primary">{value}</p>
  </div>
);
export default Statistic;
