import React from "react";
import AsideClient from "../../components/Users/AsideClient";
import Header from "../../components/Users/header";
import ProfilPage from "../../components/ProfilPage";

const ClientProfile = () => {
  return (
    <div className="flex h-screen bg-gradient-to-br from-[#f0f4f8] to-[#dbe5ed]">
      <AsideClient />
      <div className="bg-gradient-to-br from-[#f0f4f8] to-[#dbe5ed] flex-grow py-14 px-6 sm:px-10 lg:px-20 xl:px-40">
        <main className="flex-1 p-6 overflow-y-auto">
          <Header />
          <div className="text-2xl font-bold text-gray-800 text-start  ">
            Profile
          </div>
          <div>
            <ProfilPage/>
          </div>
          
        </main>
      </div>
    </div>
  );
};

export default ClientProfile;

// import React from "react";
// import Aside from "../../components/Users/Aside";
// import FooterClient from "../../components/Users/FooterClient";

// const ClientProfile = () => {
//   return (
//     <div className="min-h-screen flex flex-col">
//       <Aside />
//       <div className="bg-gradient-to-br from-[#f0f4f8] to-[#dbe5ed] flex-grow py-14 px-6 sm:px-10 lg:px-20 xl:px-40">
//         <main>
//           <h1 className="text-2xl font-bold text-gray-800 mb-8">Profile</h1>

//           <div className="flex flex-col md:flex-row gap-10">
//             {/* Avatar section */}
//             <div className="bg-white rounded-xl p-4 flex justify-center items-center">
//               <img
//                 className="w-40 h-40 rounded-xl object-cover"
//                 src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..."
//                 alt="User Avatar"
//               />
//             </div>

//             {/* Autres infos utilisateur ici */}
//             <div className="flex-1 bg-white rounded-xl p-6">
//               <p className="text-gray-700">Détails du profil à ajouter ici...</p>
//             </div>
//           </div>
//         </main>
//       </div>
//       <FooterClient />
//     </div>
//   );
// };

// export default ClientProfile;
