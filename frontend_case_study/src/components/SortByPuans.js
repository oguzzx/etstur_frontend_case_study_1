import React, { useState } from "react";

function SortByPuans({ selects, setSelects, otels, setOtels }) {
  const sortOtels = (otels) => {
    if (selects === "artan") {
      return otels.sort((a, b) => b.puan - a.puan);
    } else if (selects === "azalan") {
      return otels.sort((a, b) => a.puan - b.puan);
    } else {
      return otels;
    }
  };

  return (
    <div className="sort-container" onChange={() => sortOtels(otels)}>
      <select
        name="Sırala"
        id="puan"
        value={selects}
        onChange={(e) => setSelects(e.target.value)}
      >
        <option value="artan">Puan (Artan)</option>
        <option value="azalan">Puan (Azalan)</option>
      </select>
    </div>
  );
}

export default SortByPuans;
