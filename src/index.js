import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { ApplicationContext } from "./context/store";

import "./style/style.css";
import "./style/main.css";
import "./style/insurancestyle.css";
import "./style/style.scss";

ReactDOM.render(
  <React.StrictMode>
    <ApplicationContext>
      <App />
    </ApplicationContext>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
