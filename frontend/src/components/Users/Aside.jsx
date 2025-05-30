import React, { useState } from "react";
import { Link } from "react-router-dom";
import CardModal from "../../pages/User/CardModal";

const Aside = () => {
  const [isOpen, setIsOpen] = useState(false); // ✅ État pour ouvrir/fermer le modal

  return (
    <aside className="w-64 bg-white shadow-md p-4 space-y-4">
      <h2 className="text-2xl font-bold text-primary">Dashboard</h2>
      <nav className="space-y-2">
        <Link to="/client/listpizza" className="block hover:text-primary">
          Liste pizza
        </Link>
        <Link to="/client/historics" className="block hover:text-primary">
          Historics
        </Link>
      </nav>
    </aside>

    // </div>
  );
};

export default Aside;


