import React, { useState } from "react";
import "./app.css";
import OtelAdd from "./components/OtelAdd";
import OtelList from "./components/OtelList";
import Paginate from "./components/Paginate";
import SortByPuans from "./components/SortByPuans";

function App() {
  const [otels, setOtels] = useState([]);
  const [newOtelName, setNewOtelName] = useState();
  const [newOtelPuan, setNewOtelPuan] = useState();
  const [isAdd, setIsAdd] = useState(false);
  const [selects, setSelects] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [otelsPerPage] = useState(4);

  const indexOfLastOtel = currentPage * otelsPerPage;
  const indexOfFirstOtel = indexOfLastOtel - otelsPerPage;
  const currentOtels = otels.slice(indexOfFirstOtel, indexOfLastOtel);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(otels.length / otelsPerPage); i++) {
    pageNumbers.push(i);
  }

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    console.log(pageNumber);
  };

  const deleteOtel = (otel) => {
    setOtels(otels.filter((o) => o.id !== otel.id));
  };

  return (
    <div className="App">
      <OtelAdd
        isAdd={isAdd}
        setIsAdd={setIsAdd}
        newOtelName={newOtelName}
        setNewOtelName={setNewOtelName}
        newOtelPuan={newOtelPuan}
        setNewOtelPuan={setNewOtelPuan}
        otels={otels}
        setOtels={setOtels}
      />
      <SortByPuans
        selects={selects}
        setSelects={setSelects}
        otels={otels}
        setOtels={setOtels}
      />
      <OtelList
        otels={otels}
        setOtels={setOtels}
        selects={selects}
        currentOtels={currentOtels}
        deleteOtel={deleteOtel}
      />
      <Paginate
        otels={otels}
        setOtels={setOtels}
        pageNumbers={pageNumbers}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
}

export default App;
