import React from "react";
import Otel from "./Otel";
import Paginate from "./Paginate";

function OtelList({ otels, setOtels, selects, currentOtels, paginate }) {
  return (
    <div className="otellist-container" onChange={() => paginate(otels)}>
      {currentOtels.map((otel) => (
        <Otel
          key={otel.id}
          otel={otel}
          otels={otels}
          setOtels={setOtels}
          selects={selects}
        />
      ))}
    </div>
  );
}

export default OtelList;
