import React from "react";
import HeaderUser from "../../components/Users/HeaderUser";
import FooterClient from "../../components/Users/FooterClient";

const Menu = () => {
  return (
    <>
      <HeaderUser />

      <div className="bg-gradient-to-br from-[#f0f4f8] to-[#dbe5ed] min-h-screen flex flex-col pt-14">
        <main className="flex-grow">
          {/* En-tête */}
          <div className="grid grid-cols-2 mt-10 mb-6 px-5">
            {/* Titre */}
            <div className="text-2xl font-bold text-gray-800 text-start">
              Menu
            </div>

            {/* Zone de recherche / filtre */}
            <div className="flex justify-end">
              <div className="form-control grid grid-cols-3 gap-4">
                {/* Input de recherche */}
                <div className="flex justify-end">
                  <input
                    type="text"
                    placeholder="Recherche"
                    className="input md:w-auto"
                  />
                </div>

                {/* Bouton de recherche */}
                <div className="flex justify-end">
                  <button className="btn btn-outline btn-primary">
                    Rechercher
                  </button>
                </div>

                {/* Filtre */}
                <div className="dropdown dropdown-end">
                  <div tabIndex={0} role="button" className="btn ">
                    Click
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                  >
                    <li>
                      <a>Item 1</a>
                    </li>
                    <li>
                      <a>Item 2</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            piz
          </div>

          {/* ICI tu peux afficher la liste des produits (à faire) */}
        </main>

        <FooterClient />
      </div>
    </>
  );
};

export default Menu;
