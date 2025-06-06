import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { mois: "jan", commandes: 12 },
  { mois: "Fevr", commandes: 8 },
  { mois: "Mars", commandes: 15 },
  { mois: "Avril", commandes: 10 },
  { mois: "Mai", commandes: 18 },
  { mois: "Juin", commandes: 22 },
  { mois: "Juil", commandes: 17 },
  { mois: "Aout", commandes: 15 },
  { mois: "Sept", commandes: 10 },
  { mois: "Oct", commandes: 18 },
  { mois: "Nov", commandes: 22 },
  { mois: "Dec", commandes: 17 },
  
];

export default function CommandesBarChartClient() {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <h3>Evolution de Commandes par An</h3>
      <ResponsiveContainer>
        <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="mois" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="commandes" fill="#4CAF50" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
