import React from "react";
import { useNavigate } from "react-router-dom";
// import pizzaImage from "../assets/pizza.png";

const GetStarted = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/login"); // ou "/signup"
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-yellow-50 text-center px-6">
      <img src="https://th.bing.com/th/id/R.5dc321d3bb1e873246a9aa5bd551a900?rik=qjSFZHo4Z95YDw&riu=http%3a%2f%2fnepizzact.com%2fwp-content%2fuploads%2f2016%2f12%2fmain-image-2400x1300.jpg&ehk=MnAFuKtYjhPHA21qPL6sZCnKrwnz0fy8RGrOUnhO%2fDU%3d&risl=&pid=ImgRaw&r=0" alt="Pizza" className=" mb-8" />
      
      <h1 className="text-4xl font-bold text-red-600 mb-4">
        Bienvenue chez Pizza Express
      </h1>
      
      <p className="text-gray-600 mb-8 text-lg max-w-md">
        Commandez vos pizzas préférées, livrées chaudes à votre porte en quelques clics.
      </p>
      
      <button
        onClick={handleStart}
        className="bg-red-600 text-white px-6 py-3 rounded-full text-lg hover:bg-red-700 transition"
      >
        Commencer
      </button>
    </div>
  );
};

export default GetStarted;


