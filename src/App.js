import './App.scss';
import customers from './data/customers.json';

function App() {
  return (
    <div className="App">
		  <h1>Northwind Data Site</h1>
		  <div>There are {customers.length} customers.</div>
		  <ul>
			  {customers.filter(m => m.address.city === "London").map((customer, index) => {
				  return (
					  <li key={index}>{customer.companyName} ({customer.address.city})</li>
				  )
			  })}
		  </ul>
    </div>
  );
}

export default App;
