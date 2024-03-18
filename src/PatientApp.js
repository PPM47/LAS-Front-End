import React from "react";
import { Routes, Route } from "react-router-dom";


import "./App.css";

import SideNavPa from "./components/sideNavPa";
import PatientLogin from "./pages/patientLogin";
import AppointmentsPa from "./pages/appointmentsPa";

import RegistrationPa from "./pages/registrationPa";

import NoPage from "./pages/nopage";
// import AdminLogin from "./pages/adminlogin";

// import api from './api/axiosConfig';

function App() {
  // const [logindata, setdata] = useState();
  return (
    <>
     <div className="login-page-main-continer">
      <Routes>
        <Route index element={<PatientLogin />} />
        <Route element={<PatientLogin />} />
      
   
      </Routes>
       
      </div>
    <div className="page-layout-main">
     
      <div className="spaceholder">
      <SideNavPa />
       

      </div>
      <div className="main-content-continer">
        <Routes>
       
          <Route path="/appointmentsPa" element={<AppointmentsPa />} />
          <Route path="/registrationPa" element={<RegistrationPa />} />
         
          <Route path="*" element={<NoPage />} />
        </Routes>
      </div>
    </div>
    </>
  );
}

export default App;
