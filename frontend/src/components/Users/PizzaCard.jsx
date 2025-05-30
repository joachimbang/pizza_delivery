import React from 'react'

const PizzaCard = () => {
  return (
    <div>
      
    </div>
  )
}

export default PizzaCard

// const PizzaCard = ({ title, date, imageUrl }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 30 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.4 }}
//     className="bg-white rounded-xl shadow-md p-4 flex items-center gap-4"
//   >
//     <img
//       className="w-20 h-20 object-cover rounded-lg"
//       src={imageUrl}
//       alt={title}
//     />
//     <div>
//       <h3 className="text-base font-semibold text-gray-800">{title}</h3>
//       <p className="text-sm text-gray-500">{date}</p>
//     </div>
//   </motion.div>
// );