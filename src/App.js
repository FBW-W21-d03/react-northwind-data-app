import './App.scss';
import customers from './data/customers.json';

function App() {
  return (
    <div className="App">
		  <h1>Northwind Data Site</h1>
		  <div>There are {customers.length} customers.</div>
    </div>
  );
}

export default App;
