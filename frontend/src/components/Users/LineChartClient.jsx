import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  
  { jour: "Lun", commandes: 12 },
  { jour: "Mar", commandes: 8 },
  { jour: "Mer", commandes: 15 },
  { jour: "Jeu", commandes: 10 },
  { jour: "Ven", commandes: 18 },
  { jour: "Sam", commandes: 10 },
  { jour: "Dim", commandes: 18 },
];


export default function LineChartClient() {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <h3>Évolution des commandes par Semaine</h3>
      <ResponsiveContainer>
        <LineChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="jour" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="commandes" stroke="#2196F3" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
