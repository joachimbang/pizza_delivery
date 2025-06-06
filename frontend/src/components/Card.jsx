import React from 'react'

const Card = ({title,value,icon}) => {
  return (
    <div className="bg-white p-4 rounded shadow text-center hover:bg-slate-100 cursor-auto">
    <div className='flex gap-4 justify-center items-center'>{icon}<h3 className="text-lg font-medium mb-2">{title}</h3></div>
    <p className="text-2xl font-bold text-primary">{value}</p>
  </div>
  )
}

export default Card
