import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
// import App from "./App";

import App from "./App";
import { Helmet } from "react-helmet";
import { BrowserRouter} from "react-router-dom";

import "./styles/base.css";
import "./styles/layout.css";
import "./styles/component.css";
import "./styles/manutoggle.css";
// import { ImLab } from "react-icons/im";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Lab Appointment System</title>
    </Helmet>
    <BrowserRouter>
   
        <App/>
     
      
      {/* <PatientApp /> */}
    </BrowserRouter>
  </React.StrictMode>
);
