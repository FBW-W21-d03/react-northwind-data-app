import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Home } from "./pages/Home";
import { Customer } from "./pages/Customer";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="customers" element={<Customer />} />
          <Route
            path="*"
            element={
              <div>
                <h1>Oops! Hier gibt es nichts</h1>
              </div>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
