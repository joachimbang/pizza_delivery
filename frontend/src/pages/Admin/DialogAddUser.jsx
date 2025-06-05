import React from "react";
import { SquarePen, Trash2 } from "lucide-react";

const DialogAddUser = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center px-4 sm:px-0">
      <div className="bg-white w-full max-w-2xl rounded-xl p-4 sm:p-6 shadow-xl relative">
        {/* Bouton Fermer */}
        <button
          className="absolute top-3 right-4 text-gray-500 hover:text-red-600 text-xl"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Produit (responsive flex-wrap) */}
        <div className="flex-1 bg-white rounded-xl p-6">
          <p className="text text-gray-600 mt-4">User Information</p>
          <p className="pt-4">Name</p>
          <label className="input input-bordered flex items-center gap-2 w-full">
            <input type="text" className="grow" placeholder="john doe " />
          </label>
          <p className="pt-4">Email</p>
          <label className="input input-bordered flex items-center gap-2 w-full">
            <input type="email" className="grow" placeholder="john doe" />
          </label>
          <p className="pt-4">Number</p>
          <label className="input input-bordered flex items-center gap-2 w-full">
            <input type="number" className="grow" placeholder="john doe" />
          </label>
          <p className="pt-4">Role</p>
          <select className="select select-bordered w-full">
            <option disabled selected className="text-gray-500">
              choisi le role
            </option>
            <option>Client</option>
            <option>Deliver</option>
          </select>
        </div>
        <div className=" text-sm sm:text-base flex justify-end p-5">
          <button className="btn btn-primary transition-colors duration-300 ">
            Save now
          </button>
        </div>
      </div>
    </div>
  );
};

export default DialogAddUser;
