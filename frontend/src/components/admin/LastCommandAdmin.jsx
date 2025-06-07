import React from 'react';
import { Link } from "react-router-dom";
import StatusBadge from './StatusBadge';

<StatusBadge/>

const LastCommandAdmin = () => {
  const commandes = [
    { id: 1, name: "Cy Ganderton", email: "cy@example.com", status: "livré" },
    { id: 2, name: "Hart Hagerty", email: "hart@example.com", status: "en cours" },
    { id: 3, name: "Brice Swyre", email: "brice@example.com", status: "annulé" },
    { id: 4, name: "Jean Dupont", email: "jean@example.com", status: "livré" },
    { id: 5, name: "Fatou Dia", email: "fatou@example.com", status: "en cours" },
  ];

  return (
    <div>
      <section className="bg-white p-4 rounded shadow mb-8">
        <h2 className="text-lg font-semibold mb-4">Dernières commandes</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table table-zebra">
            <thead>
              <tr className="text-left border-b">
                <th className="py-2 px-4">#</th>
                <th className="py-2 px-4">Nom</th>
                <th className="py-2 px-4">Email</th>
                <th className="py-2 px-4">Statut</th>
              </tr>
            </thead>
            <tbody>
              {commandes.map((cmd, index) => (
                <tr key={cmd.id} className="border-b hover:bg-gray-50">
                  <td className="py-2 px-4">{index + 1}</td>
                  <td className="py-2 px-4">{cmd.name}</td>
                  <td className="py-2 px-4">{cmd.email}</td>
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

export default LastCommandAdmin;
