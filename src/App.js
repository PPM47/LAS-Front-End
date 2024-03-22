import React from "react";
import { Routes, Route } from "react-router-dom";

import SideNav from "./components/sideNav";

import "./App.css";
import AdminLogin from "./pages/adminlogin";
// import AdminLogin from "./pages/adminlogin";
import Appointments from "./pages/appointments";
import ViewAppointments from "./pages/viewAppointment";
import PatientUpDel from "./pages/patientUpDel";
import Registration from "./pages/registration";
import AdminRegistration from "./pages/registrationAdmin";
import Payment from "./pages/payment";
import TestDetails from "./pages/testdetails";
import NoPage from "./pages/nopage";
import TestReport from "./pages/testReport";


// import api from './api/axiosConfig';

function App() {
  // const [logindata, setdata] = useState();
  return (
    <>
    <Routes>
    <Route path="/adminlogin" index element={<AdminLogin/>} />
    </Routes>
      
      <div className="page-layout-main">
        <div className="spaceholder">
          <SideNav />
        </div>
        <div className="main-content-continer">
          <Routes>
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/viewappointments" element={<ViewAppointments />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/adminregistration" element={< AdminRegistration />} />
            <Route path="/testdetails" element={<TestDetails />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/TestReport" element={<TestReport />} />
            <Route path="/PatientUpDel" element={<PatientUpDel />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
