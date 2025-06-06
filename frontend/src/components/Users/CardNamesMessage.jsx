import React from 'react';

const CardNamesMessage = () => {
  return (
    <div className="mt-20   gap-4">
      <p className="text-lg sm:text-xl font-semibold text-gray-800">
        👋 Bonjour Joachim
      </p>
      <p className="text-base sm:text-lg text-gray-600">
        Vous avez <span className="font-bold text-primary">2 commandes</span> en cours
      </p>
    </div>
  );
};

export default CardNamesMessage;
