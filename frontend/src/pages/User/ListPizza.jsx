import React from "react";
import { motion } from "framer-motion";
import AsideClient from "../../components/Users/AsideClient";
import UserItemList from "../../components/Users/UserItemList";
import SearchFilter from "../../components/Users/SearchFilter";
import Header from "../../components/Users/HeaderClient";
import CardPizza from "../../components/Users/CardPizza";

const ListPizza = () => {
  return (
    <>
      <div className="flex h-screen bg-gradient-to-br from-[#f0f4f8] to-[#dbe5ed]">
        <AsideClient />
        <main className="flex-1 p-6 overflow-y-auto">
          <Header />
          <SearchFilter title={"Lists of pizza available"} />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <CardPizza/>
          </motion.div>
        </main>
      </div>
      {/* <div className="bg-gradient-to-br from-[#f0f4f8] to-[#dbe5ed] min-h-screen flex flex-col pt-14 px-40"> */}
    </>
  );
};

export default ListPizza;
