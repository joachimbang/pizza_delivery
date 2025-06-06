import React from "react";
import { DollarSign, Users ,User2Icon, CircleDollarSign, XCircle, Truck, Package, Package2, Clock, Wallet, CircleCheckBig, CircleCheckBigIcon} from 'lucide-react';
import Card from "../Card";


const Statistic = () => {
  return (
    <>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-6 mb-8  mt-20 ">
        <Card icon={<Package className="text-green-600 size-8"/>} title=" Totales commandes du jour" value="120" />
        <Card icon={<Clock className="text-green-600 size-8 "/>} title=" Commande en cours" value="50" />
        <Card icon={<XCircle className="text-red-600 size-8"/>} title=" Commande annulees " value="45" />
  
        
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-6 mb-8 ">
        <Card icon={<CircleCheckBigIcon className="text-green-600 size-8"/>} title="Commande delivre" value="255" />
        <Card icon={<CircleDollarSign className="text-green-600 size-8"/>} title="Revenu du jour" value="255" />
        <Card icon={<CircleDollarSign className="text-green-600 size-8"/>} title=" Revenu de la semaine" value="255" />
        
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-6 mb-8 ">
        {/* <Card icon={<Wallet/>} title="👤 Revenu du jour" value="255" /> */}
        {/* <Card icon={<CircleDollarSign className="text-green-600 size-8"/>} title=" Montant récupéré" value="25,000 $" /> */}
        <Card icon={<CircleDollarSign className="text-green-600 size-8"/>} title=" Revenu total" value="25,000 $" />
        <Card icon={<Users className="size-8"/>} title=" Clients" value="45" />
        <Card icon={<Truck className="size-8"/>} title=" Livreurs" value="300" />
      </div>
    </>
  );
};

export default Statistic;
