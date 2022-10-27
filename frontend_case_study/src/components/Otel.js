import React from "react";

function Otel({ otel, otels, setOtels, selects, key }) {
  const increasePuan = (otel) => {
    otel.puan = parseInt(otel.puan) + 1;
    setOtels([...otels]);
  };

  const decreasePuan = (otel) => {
    otel.puan = parseInt(otel.puan) - 1;
    setOtels([...otels]);
  };

  return (
    <div className="otel-container" key={otel.key}>
      <h3>{otel.name}</h3>
      <h3>{otel.puan} Puan</h3>
      <div className="buttons">
        <button onClick={() => increasePuan(otel)}>Puan Arttır</button>
        <button onClick={() => decreasePuan(otel)}>Puan Azalt</button>
      </div>
    </div>
  );
}

export default Otel;
