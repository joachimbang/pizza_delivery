import React from "react";
import { Link } from "react-router-dom";
import AsideAdmin from "../../components/admin/AsideAdmin";
import HeaderAdmin from "../../components/admin/HeaderAdmin";
import CardListUser from "../../components/admin/CardListUser";
import TitleFilter from "../../components/admin/TitleFilter";
import DialogUserInfo from "./DialogUserInfo";

const ListUser = () => {
  
  return (
    <div className="flex h-screen bg-gradient-to-br from-[#f0f4f8] to-[#dbe5ed]">
      <AsideAdmin />
      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <TitleFilter title={"Users"} />
        <HeaderAdmin />
        <CardListUser />
        
      </main>
    </div>
  );
};

export default ListUser;
