import React, { useState } from "react";
import { useNavigate } from "react-router";
import DialogAddUser from "../../pages/Admin/DialogAddUser";

const TitleFilterAdmin = ({ title ,nameaction }) => {

    const [isOpen, setIsOpen] = useState(false);
    
  const navigate = useNavigate();

  return (
    // {/* En-tête */}
    <>
      // {/* En-tête */}
      <div className="grid grid-cols-2 mt-20 mb-6 ">
        {/* Titre */}
        <div className="text-2xl font-bold text-gray-800 text-start">{title}</div>

        {/* Zone de recherche / filtre */}
        <div className="flex justify-end flex-col-reverse">
          <div className="flex justify-center px-7">
            <button onClick={() => setIsOpen(true)} className="btn join-item btn-primary">{nameaction}</button>

          </div>
          <div className="flex justify-end">
            <div className="join pb-5">
              <input
                className="input input-bordered join-item"
                placeholder="Search" />
              <select className="select select-bordered join-item">
                <option disabled selected>
                  Filter
                </option>0850195486
                <option>Deliver</option>
                <option>Client</option>
              </select>

              <div className="indicator">
                {/* <span className="indicator-item badge badge-secondary">new</span> */}
                <button className="btn join-item">Search</button>
              </div>
            </div>
          </div>
        </div>

      </div><DialogAddUser isOpen={isOpen} onClose={() => setIsOpen(false)} /></>
  );
};

export default TitleFilterAdmin;
