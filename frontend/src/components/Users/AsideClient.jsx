import React, { useState } from "react";
import { Link } from "react-router-dom";

const AsideClient = ({}) => {

  return (
    <aside className="w-64 bg-white shadow-md p-4 space-y-4">
      <h2 className="text-2xl font-bold text-primary"><Link to={'/'}>Dashboard</Link></h2>
      <nav className="space-y-2">
        <Link to="/menu" className="block text-primary font-medium">
          Liste pizza
        </Link>
        <Link to="/historic" className="block text-primary font-medium">
          Historics
        </Link>
      </nav>
    </aside>

    // </div>
  );
};

export default AsideClient;


