import React from "react";

const TitleFilter = ({ title }) => {
  return (
    // {/* En-tête */}
    <div className="grid grid-cols-2 mt-20 mb-6 ">
      {/* Titre */}
      <div className="text-2xl font-bold text-gray-800 text-start">{title}</div>

      {/* Zone de recherche / filtre */}
      <div className="flex justify-end">
        <div className="flex justify-end">
          <div className="join">
            <select className="select select-bordered join-item">
              <option disabled selected>
                Filter
              </option>
              <option>Sci-fi</option>
              <option>Drama</option>
              <option>Action</option>
            </select>
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
    </div>
  );
};

export default TitleFilter;
