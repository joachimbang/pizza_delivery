import React from "react";
import { Link } from "react-router-dom";
import AsideAdmin from "../../components/admin/AsideAdmin";
import HeaderAdmin from "../../components/admin/HeaderAdmin";
import Graphic from "../../components/admin/Graphic";
import Statistic from "../../components/admin/StatisticCard";
import { motion } from "framer-motion";
import { DollarSign, User2Icon, Users } from "lucide-react";
import LastCommandAdmin from "../../components/admin/LastCommandAdmin";

const AdminDashboard = () => {
  return (
    <div className="flex h-screen bg-gradient-to-br from-[#f0f4f8] to-[#dbe5ed]">
      <AsideAdmin />
      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <HeaderAdmin adminName={'admin'} />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Statistic />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 1 }}
          transition={{ duration: 1 }}
        >
          <Graphic />
        </motion.div>

        {/*  */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 1 }}
          transition={{ duration: 1.5 }}
        >
          <LastCommandAdmin/>
        </motion.div>
        {/* Timeline */}

        {/* Accès rapide */}
      </main>
    </div>
  );
};

export default AdminDashboard;
