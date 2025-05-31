import React from "react";
import { motion } from "framer-motion";

const HistoricListCard = () => {
  return (
    <>
    <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  ><div className="bg-white rounded-xl p-5 mb-6  shadow-md">
      <div className="flex flex-col sm:flex-row gap-4">
        <img
          className="w-full sm:w-40 h-40 object-cover rounded-lg"
          src="https://th.bing.com/th/id/R.5dc321d3bb1e873246a9aa5bd551a900?rik=qjSFZHo4Z95YDw&riu=http%3a%2f%2fnepizzact.com%2fwp-content%2fuploads%2f2016%2f12%2fmain-image-2400x1300.jpg&ehk=MnAFuKtYjhPHA21qPL6sZCnKrwnz0fy8RGrOUnhO%2fDU%3d&risl=&pid=ImgRaw&r=0"
          alt="My Pizza"
        />
        <div className="flex flex-col justify-between flex-1">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">My Pizza</h3>
            <p className="text-sm text-gray-500">22 avril 2025</p>
          </div>
        </div>
      </div>
    </div></motion.div>
    
    </>
  );
};

export default HistoricListCard;
