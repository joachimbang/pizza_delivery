import React, { useState } from "react";
import DialogAddPizza from "../../pages/Admin/DialogAddPizza";

const TitleButtonCommand = ({ title }) => {
     const [isDialogOpen, setIsDialogOpen] = useState(false);
  return (
    <><div className="grid grid-cols-2 mt-20 mb-6">
          {/* Titre */}
          <div className="text-2xl font-bold text-gray-800 text-start">{title}</div>

          {/* Zone de recherche / filtre */}
          <div className="flex flex-col-reverse justify-end items-center space-x-4 ">
              {/* Bouton commande spéciale */}

              <div className="w-full flex justify-end">
                  <button onClick={() => setIsDialogOpen(true)} className="btn btn-primary ">
                      Passer une commande spéciale
                  </button>
              </div>
              {/* Recherche + Filtre */}
              <div className="join pb-5">
                  <input
                      className="input input-bordered join-item w-52"
                      placeholder="Search" />
                  <select className="select select-bordered join-item w-36">
                      <option disabled selected>
                          Filter
                      </option>
                      <option>Sci-fi</option>
                      <option>Drama</option>
                      <option>Action</option>
                  </select>
                  <button className="btn join-item">Search</button>
              </div>
          </div>
      </div><DialogAddPizza
              isOpen={isDialogOpen}
              onClose={() => setIsDialogOpen(false)} /></>
  );
};

export default TitleButtonCommand;
