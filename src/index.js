import React from "react";
import ReactDOM from "react-dom/client";
import AdminLogin from "./pages/adminlogin";
import "./index.css";
// import App from "./App";
import PatientApp from "./PatientApp";
import App from "./App";
import { Helmet } from "react-helmet";
import { BrowserRouter, Routes, Route} from "react-router-dom";

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
   
        <Routes>
        <Route path="/app" element={ <App />} />
          <Route index element={<AdminLogin />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
        </Routes>
     
      <App />
      {/* <PatientApp /> */}
    </BrowserRouter>
  </React.StrictMode>
);
