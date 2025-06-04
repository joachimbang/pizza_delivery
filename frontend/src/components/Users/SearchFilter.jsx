import React from "react";

const SearchFilter = () => {
  return (
    // {/* En-tête */}
    <div className="grid grid-cols-2 mt-20 mb-6 ">
      {/* Titre */}
      <div className="text-2xl font-bold text-gray-800 text-start">Menu</div>

      {/* Zone de recherche / filtre */}
      <div className="flex justify-end">
        <div className="join">
          <div>
            <div>
              <input
                className="input input-bordered join-item"
                placeholder="Search"
              />
            </div>
          </div>
          <select className="select select-bordered join-item">
            <option disabled selected>
              Filter
            </option>
            <option>Sci-fi</option>
            <option>Drama</option>
            <option>Action</option>
          </select>
          <div className="indicator">
            {/* <span className="indicator-item badge badge-secondary">new</span> */}
            <button className="btn join-item">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
