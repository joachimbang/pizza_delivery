import React from 'react'

const StatusBadge = ({ status }) => {
  let bgColor = "";
  let textColor = "";

  switch (status.toLowerCase()) {
    case "livré":
      bgColor = "bg-green-100";
      textColor = "text-green-700";
      break;
    case "en cours":
      bgColor = "bg-yellow-100";
      textColor = "text-yellow-800";
      break;
    case "annulé":
      bgColor = "bg-red-100";
      textColor = "text-red-700";
      break;
    default:
      bgColor = "bg-gray-100";
      textColor = "text-gray-700";
  }

  return (
    <span className={`px-3 py-1 rounded-full text-sm font-medium ${bgColor} ${textColor} capitalize`}>
      {status}
    </span>
  );
};

export default StatusBadge
