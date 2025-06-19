import React from 'react';
import { useNavigate } from 'react-router';

const GetStarted = () => {
  const navigate = useNavigate();
  return (
    <div className="relative w-full h-screen">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1350&q=80')`,
          filter: 'brightness(0.5)',
        }}
      ></div>

      {/* Overlay content */}
      <div className="relative z-10 flex items-center justify-center h-full px-6">
        <div className="text-center text-white max-w-2xl space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg">
            Livraison de Pizza <br /> Rapide & Délicieuse
          </h1>
          <p className="text-lg md:text-xl drop-shadow-sm">
            Commandez votre pizza préférée en quelques clics et faites-vous livrer en un temps record.
          </p>
          <button onClick={()=>navigate('/login')} className="mt-6 px-8 py-3 bg-yellow-500 hover:bg-yellow-400 text-black text-lg font-semibold rounded-full shadow-md transition duration-300">
            Commencer
          </button>
        </div>
      </div>

      {/* Optional footer */}
      <div className="absolute bottom-4 w-full text-center text-white text-sm opacity-70">
        © 2025 PizzaExpress. Tous droits réservés.
      </div>
    </div>
  );
};

export default GetStarted;
