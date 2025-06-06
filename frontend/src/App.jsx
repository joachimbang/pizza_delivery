import React from "react";
import { Routes, Route } from "react-router-dom";
import ClientDashboard from "./pages/User/ClientDashboard";
import Historic from "./pages/User/Historic";
import ClientProfile from "./pages/User/ClientProfile";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import DeliverDashboard from "./pages/Deliver/DeliverDashboard";
import ListUser from "./pages/Admin/ListUser";
import ListPizza from "./pages/User/ListPizza";
import HistoricByUser from "./pages/Admin/HistoricByUser";
import EditUser from "./pages/Admin/EditUser";
import AdminProfil from "./pages/Admin/AdminProfil";
import DeliverProfil from "./pages/Deliver/DeliverProfil";
import ListCommand from "./pages/Admin/ListCommandAdmin";

const App = () => {
  return (
    <div className="relative h-full w-full ">
      {/* <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div></div> */}
      {/* <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> */}
      <Routes>
        <Route path="/" element={<ClientDashboard />} />
        <Route path="/admin/historicbyuser" element={<HistoricByUser />} />
        <Route path="/admin/home" element={<AdminDashboard />} />
        <Route path="/admin/listcommand" element={<ListCommand />} />
        
        <Route path="/admin/edituser" element={<EditUser />} />
        <Route path="/deliver/dashboard" element={<DeliverDashboard />} />
        <Route path="/admin/listuser" element={<ListUser />} />
        <Route path="/client/listpizza" element={<ListPizza />} />
        <Route path="/historic" element={<Historic />} />
        <Route path="/profile/deliver" element={<DeliverProfil />} />
<Route path="/profile/admin" element={<AdminProfil />} />
        <Route path="/profile/client" element={<ClientProfile />} />
        
        
      </Routes>
    </div>
  );
};
export default App;
