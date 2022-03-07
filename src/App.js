import "./App.scss";
import { useState } from "react";
import orders from "./data/orders.json";
import { Header } from "./components/Header";
import { Outlet, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  const handleSearchTermChange = (newSearchTerm) => {
    navigate(`/?q=${newSearchTerm}`);
  };
  return (
    <div className="App">
      <Header
        title="Northwind Data"
        onSearchTermChanged={handleSearchTermChange}
      />
      <Outlet />
    </div>
  );
}

export default App;
