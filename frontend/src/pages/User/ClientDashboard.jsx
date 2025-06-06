import React from "react";
import AsideClient from "../../components/Users/AsideClient";
import TitleFilter from "../../components/Users/TitleFilter";
import HistoricListCard from "../../components/Users/HistoricListCard";
import Header from "../../components/Users/HeaderClient";
import CardNamesMessage from "../../components/Users/CardNamesMessage";
import CardStatistic from "../../components/Users/CardStatistic";
import GraphicClient from "../../components/Users/GraphicClient";
import LastCommandClient from "../../components/Users/LastCommandClient";
const ClientDashboard = () => {
  return (
    <div>
      <div className="flex h-screen bg-gradient-to-br from-[#f0f4f8] to-[#dbe5ed]">
        <AsideClient />
        
          <main className="flex-1 p-6 overflow-y-auto">
            <Header />
            <CardNamesMessage/>
            <CardStatistic/>
            <GraphicClient/>
            <LastCommandClient/>
          </main>
        {/* </div> */}
      </div>
    </div>
  );
};

export default ClientDashboard;
