import React from "react";
import AsideClient from "../../components/Users/AsideClient";
import TitleFilter from "../../components/Users/TitleFilter";
import HistoricListCard from "../../components/Users/HistoricListCard";
import Header from "../../components/Users/HeaderClient";

const Historic = () => {
  return (
    <div className="flex h-screen bg-gradient-to-br from-[#f0f4f8] to-[#dbe5ed]">
      <AsideClient />
      {/* <div className="bg-gradient-to-br from-[#f0f4f8] to-[#dbe5ed] min-h-screen flex flex-col pt-14 px-40"> */}
      {/* <main className="flex-grow"> */}
      <main className="flex-1 p-6 overflow-y-auto">
        <Header/>
        <TitleFilter title={"Historics"} />
        {/* <Link></Link> */}
        <HistoricListCard />
        <HistoricListCard />
        <HistoricListCard />
        <HistoricListCard />
      </main>
    </div>
    // </div>
  );
};

export default Historic;
