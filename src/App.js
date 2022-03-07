import "./App.scss";
import { useState } from "react";
import orders from "./data/orders.json";
import { Header } from "./components/Header";
import { ResultList } from "./components/ResultList";
import { Outlet } from "react-router-dom";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchTermChange = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
  };
  return (
    <div className="App">
      <Header
        title="Northwind Data"
        onSearchTermChanged={handleSearchTermChange}
      />
      <Outlet />
      
      {/* <ul>
        {customers
          .filter((m) => m.address.city === "London")
          .map((customer, index) => {
            return (
              <li key={index}>
                {customer.companyName} ({customer.address.city})
                <ul>
                  {orders
                    .filter((m) => m.customerID === customer.customerID)
                    .sort((a, b) => a.orderDate > b.orderDate)
                    .map((order) => {
                      return (
                        <li>
                          {order.orderID} - {order.orderDate.substring(0, 10)}
                        </li>
                      );
                    })}
                </ul>
              </li>
            );
          })}
      </ul> */}
    </div>
  );
}

export default App;
