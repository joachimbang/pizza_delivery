import { Link, useNavigate } from "react-router-dom";
import StatusBadge from "../../components/admin/StatusBadge";
import AsideAdmin from "../../components/admin/AsideAdmin";
import TitleFilterAdmin from "../../components/admin/TitleFilterAdmin";
import HeaderAdmin from "../../components/admin/HeaderAdmin";
import DialogCommandInfo from "./DialogCommandInfo";
import { useState } from "react";
import { motion } from "framer-motion";

<StatusBadge />;

const ListCommandAdmin = () => {
  const commandes = [
    {
      id: 1,
      name: "Cy Ganderton",
      photo_pizza: "",
      nameclient: "cy",
      date: "",
      amount: "",
      namedeliver: "",
      status: "livré",
    },
    {
      id: 2,
      name: "Hart Hagerty",
      photo_pizza: "",
      nameclient: "hart",
      date: "",
      amount: "",
      namedeliver: "",
      status: "en cours",
    },
    {
      id: 3,
      name: "Brice Swyre",
      photo_pizza: "",
      nameclient: "brice",
      date: "",
      amount: "",
      namedeliver: "",
      status: "annulé",
    },
    {
      id: 4,
      name: "Jean Dupont",
      photo_pizza: "",
      nameclient: "jean",
      date: "",
      amount: "",
      namedeliver: "",
      status: "livré",
    },
    {
      id: 5,
      name: "Fatou Dia",
      photo_pizza: "",
      nameclient: "fatou",
      date: "",
      amount: "",
      namedeliver: "",
      status: "en cours",
    },
  ];

  const [selectedCommand, setSelectedCommand] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleRowClick = (cmd) => {
    setSelectedCommand(cmd);
    setIsDialogOpen(true);
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-[#f0f4f8] to-[#dbe5ed]">
      <AsideAdmin />

      {/* Main Content */}
      <main className="bg-white rounded shadow mb flex-1 p-6 overflow-y-auto">
        {/* <h2 className="text-lg font-semibold mb-4">Users</h2> */}
        <TitleFilterAdmin
          title={"Commandes"}
          nameaction={"Ajout d'une commande"}
        />

        <HeaderAdmin />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 1 }}
          transition={{ duration: 1.5 }}
        >
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto">
              <thead>
                <tr className="text-left border-b">
                  <th className="py-2 px-4"></th>
                  <th className="py-2 px-4">Nom Pizza</th>
                  <th className="py-2 px-4">Photo_pizza Pizza</th>
                  <th className="py-2 px-4">Nom client</th>
                  <th className="py-2 px-4">Date</th>
                  <th className="py-2 px-4">Montant</th>
                  <th className="py-2 px-4">Nom Livreur</th>
                  <th className="py-2 px-4">Statut</th>
                </tr>
              </thead>
              <tbody>
                {commandes.map((cmd, index) => (
                  <tr
                    key={cmd.id}
                    className="border-b hover:bg-gray-50"
                    onClick={() => handleRowClick(cmd)}
                  >
                    <td className="py-2 px-4">{index + 1}</td>

                    <td className="py-2 px-4">{cmd.name}</td>
                    <td className="py-2 px-4">
                      <img src={cmd.photo_pizza} alt="photo pizza" />
                    </td>
                    <td className="py-2 px-4">{cmd.nameclient}</td>
                    <td className="py-2 px-4">{cmd.date}</td>
                    <td className="py-2 px-4">{cmd.amount}</td>
                    <td className="py-2 px-4">{cmd.namedeliver}</td>
                    <td className="py-2 px-4">
                      <StatusBadge status={cmd.status} />
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
      <DialogCommandInfo
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        command={selectedCommand}
      />
    </div>
  );
};

export default ListCommandAdmin;
