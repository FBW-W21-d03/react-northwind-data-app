import "./App.scss";
import customers from "./data/customers.json";
import orders from "./data/orders.json";
import { Header } from "./components/Header";
import { ResultList } from "./components/ResultList";

//test

function App() {
  return (
    <div className="App">
      <Header title="Northwind Data" />
      {/* <div>There are {customers.length} customers.</div> */}
      <ResultList customers={customers} />
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
