import React from 'react'
import Card from '../Card'

const CardStatistic = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 mb-8 mt-5 ">
      <Card title={"Total commandes"} value="120"/>
      <Card title={"Total en cours"} value="120"/>
      <Card title={"Total livrees"} value="120"/>
      <Card title={"Total Annulees"} value="120"/>

      {/* <Card icon={<Package className="text-green-600 size-8"/>} title=" Totales commandes du jour" value="120" />
        <Card icon={<Clock className="text-green-600 size-8 "/>} title=" Commande en cours" value="50" />
        <Card icon={<XCircle className="text-red-600 size-8"/>} title=" Commande annulees " value="45" /> */}
      
    </div>
  )
}

export default CardStatistic
