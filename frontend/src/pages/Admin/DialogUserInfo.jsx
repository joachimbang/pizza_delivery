import React from "react";
import { SquarePen,Trash2 } from "lucide-react";

const DialogUserInfo = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    // <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center px-4 sm:px-0">
      <div className="fixed inset-0 bg-black bg-opacity-40 z-[9999] flex items-center justify-center px-4 sm:px-0">

      <div className="bg-white w-full max-w-2xl rounded-xl p-4 sm:p-6 shadow-xl relative">
        {/* Bouton Fermer */}
        <button
          className="absolute top-3 right-4 text-gray-500 hover:text-red-600 text-xl"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Produit (responsive flex-wrap) */}
        <div className="py-4 flex flex-col sm:flex-row gap-4 items-center sm:items-start">
          <img
            src="https://via.placeholder.com/80"
            alt="avatar"
            className="w-24 h-24 sm:w-20 sm:h-20 rounded-lg object-cover"
          />
          <div className="flex-1 text-center sm:text-left">
            <p className="font-medium">John Doe</p>
            <p className="font-normal">JohnDoe@gmail.com</p>
          </div>
        </div>

        <div className="mt-6 text-sm sm:text-base flex justify-end gap-8">
          <button className="btn mt-4 hover:bg-green-600 hover:text-white">
            Edit
            <SquarePen/>

          </button>
          <button className="btn mt-4 hover:bg-red-600 hover:text-white">
            Delete
            <Trash2 />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DialogUserInfo;
