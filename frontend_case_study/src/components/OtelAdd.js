import React, { useState } from "react";
import { BsFillPlusSquareFill } from "react-icons/bs";

function OtelAdd({
  isAdd,
  setIsAdd,
  newOtelName,
  setNewOtelName,
  newOtelPuan,
  setNewOtelPuan,
  otels,
  setOtels,
}) {
  const addOtel = () => {
    setIsAdd(true);
  };

  const addNewOtel = () => {
    if (newOtelName !== "" && newOtelPuan !== "") {
      setOtels([...otels, { name: newOtelName, puan: newOtelPuan }]);
      setNewOtelName("");
      setNewOtelPuan("");
    }
  };

  return (
    <div className="otelcontainer">
      <div onClick={() => addOtel()} className="addotel">
        <BsFillPlusSquareFill size={"60px"} />
        <h3>Otel Ekle</h3>
      </div>

      {isAdd && (
        <div className="addotelform">
          <label htmlFor="otelname">Otel Adı</label>
          <input
            type="text"
            name="otelname"
            id="otelname"
            value={newOtelName}
            onChange={(e) => setNewOtelName(e.target.value)}
          />
          <br />
          <label htmlFor="otelpuan">Otel Puanı</label>
          <input
            type="number"
            name="otelpuan"
            id="otelpuan"
            value={newOtelPuan}
            onChange={(e) => setNewOtelPuan(e.target.value)}
          />
          <br />
          <button onClick={() => addNewOtel()}>Otel Ekle</button>
        </div>
      )}
    </div>
  );
}

export default OtelAdd;
