import React from 'react'
import { SquarePen,Trash2 } from "lucide-react";
const DialogCommandInfo = ({ isOpen, onClose, command }) => {
  if (!isOpen || !command) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 z-[9999] flex items-center justify-center px-4 sm:px-0">
      <div className="bg-white w-full max-w-2xl rounded-xl p-4 sm:p-6 shadow-xl relative">
        <button
          className="absolute top-3 right-4 text-gray-500 hover:text-red-600 text-xl"
          onClick={onClose}
        >
          ✕
        </button>

        <div className="py-4 flex flex-col sm:flex-row gap-4 items-center sm:items-start">
          <img
            src={command.photo_pizza || "https://via.placeholder.com/80"}
            alt="pizza"
            className="w-24 h-24 sm:w-20 sm:h-20 rounded-lg object-cover"
          />
          <div className="flex-1 text-center sm:text-left">
            <p className="font-medium">{command.name}</p>
            <p className="font-normal">{command.nameclient}</p>
            <p className="text-sm text-gray-500">{command.date}</p>
            <p className="text-sm text-gray-500">{command.amount} FCFA</p>
            <p className="text-sm text-gray-500">{command.status}</p>
          </div>
        </div>

        <div className="mt-6 text-sm sm:text-base flex justify-end gap-8">
          <button className="btn mt-4 hover:bg-green-600 hover:text-white">
            Edit <SquarePen />
            
          </button>
          <button className="btn mt-4 hover:bg-red-600 hover:text-white">
            Delete <Trash2 />
            
          </button>
        </div>
      </div>
    </div>
  );
};


export default DialogCommandInfo
