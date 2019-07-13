import React from "react";
const SortPanel = () => {
  return (
    <div className="container">
      <div className="filter rounded_wrapper flex">
        <div className="sort">
          <span>Sort by:</span>
          <select>
            <option>Price</option>
            <option>Newer</option>
          </select>
        </div>
        <div className="params">
          <input type="text" placeholder="Keyword" />
        </div>
      </div>
    </div>
  );
};
export default SortPanel;
