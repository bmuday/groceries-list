import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(
  <React.StrictMode>
    <h1>Hello!</h1>
    <App />
  </React.StrictMode>,
  document.querySelector("#root")
);
