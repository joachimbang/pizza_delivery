import React from 'react';
import { Link } from "react-router-dom";

const StatusBadge = ({ status }) => {
  let bgColor = "";
  let textColor = "";

  switch (status.toLowerCase()) {
    case "livré":
      bgColor = "bg-green-100";
      textColor = "text-green-700";
      break;
    case "en cours":
      bgColor = "bg-yellow-100";
      textColor = "text-yellow-800";
      break;
    case "annulé":
      bgColor = "bg-red-100";
      textColor = "text-red-700";
      break;
    default:
      bgColor = "bg-gray-100";
      textColor = "text-gray-700";
  }

  return (
    <span className={`px-3 py-1 rounded-full text-sm font-medium ${bgColor} ${textColor} capitalize`}>
      {status}
    </span>
  );
};

const LastCommandClient = () => {
  const commandes = [
    { id: 1, pizzaname: "Cy Ganderton", prix: "13",date:"22/10/2025", status: "livré" },
    { id: 2, pizzaname: "Hart Hagerty", prix: "23",date:"22/10/2025", status: "en cours" },
    { id: 3, pizzaname: "Brice Swyre", prix: "44",date:"22/10/2025", status: "annulé" },
    { id: 4, pizzaname: "Jean Dupont", prix: "31",date:"22/10/2025", status: "livré" },
    { id: 5, pizzaname: "Fatou Dia", prix: "23",date:"22/10/2025", status: "en cours" },
  ];

  return (
    <div>
      <section className="bg-white p-4 rounded shadow mb-8">
        <h2 className="text-lg font-semibold mb-4">Dernières commandes</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="text-left border-b">
                <th className="py-2 px-4">#</th>
                <th className="py-2 px-4">Nom</th>
                <th className="py-2 px-4">prix</th>
                <th className="py-2 px-4">Date</th>
                <th className="py-2 px-4">Statut</th>
              </tr>
            </thead>
            <tbody>
              {commandes.map((cmd, index) => (
                <tr key={cmd.id} className="border-b hover:bg-gray-50">
                  <td className="py-2 px-4">{index + 1}</td>
                  <td className="py-2 px-4">{cmd.pizzaname}</td>
                  <td className="py-2 px-4">{cmd.prix}</td>
                  <td className="py-2 px-4">{cmd.date}</td>
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
      </section>
    </div>
  );
};

export default LastCommandClient;
