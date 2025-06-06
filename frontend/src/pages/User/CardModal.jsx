import React from "react";

const CardModal = ({ isOpen, onClose }) => {
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

        {/* Titre */}
        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center sm:text-left">🛒 Mon Panier</h2>

        {/* Produit (responsive flex-wrap) */}
        <div className="border-b py-4 flex flex-col sm:flex-row gap-4 items-center sm:items-start">
          <img
            src="https://via.placeholder.com/80"
            alt="pizza"
            className="w-24 h-24 sm:w-20 sm:h-20 rounded-lg object-cover"
          />
          <div className="flex-1 text-center sm:text-left">
            <p className="font-medium">Pizza Margherita</p>
            <div className="flex items-center justify-center sm:justify-start gap-2 mt-2">
              <button className="btn btn-xs">-</button>
              <span>1</span>
              <button className="btn btn-xs">+</button>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500">10€ x 1</p>
            <p className="font-bold">10€</p>
          </div>
        </div>

        {/* Résumé de commande */}
        <div className="mt-6 text-sm sm:text-base">
          <div className="flex justify-between mb-2">
            <span>Sous-total</span>
            <span>10€</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Frais de livraison</span>
            <span>5€</span>
          </div>
          <div className="flex justify-between text-lg font-bold">
            <span>Total</span>
            <span>15€</span>
          </div>
          <button className="btn btn-primary btn-block mt-4">Passer la commande</button>
        </div>
      </div>
    </div>
  );
};

export default CardModal;
