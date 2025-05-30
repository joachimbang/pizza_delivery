import React from "react";
import { Routes, Route } from "react-router-dom"; // ← Corrigé ici
import UserHome from "./pages/User/UserHome";

const App = () => {
  return (
    <div className="relative h-full w-full ">
      
      {/* <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div></div> */}
      {/* <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> */}
      <Routes>
        <Route path="/" element={<UserHome />} />
      </Routes>
    </div>
  );
};
export default App;

