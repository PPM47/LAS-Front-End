import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { RiSecurePaymentLine } from "react-icons/ri";
import { CgDetailsMore } from "react-icons/cg";
import { ImLab } from "react-icons/im";
import { TbLogout } from "react-icons/tb";
import { BsPeople } from "react-icons/bs";
import { HiOutlineClipboardList, HiOutlinePencilAlt } from "react-icons/hi";

export const SideNav = () => {
  const [isNavOpen, setNavOpen] = useState(false);
 
  return (
    <nav className="nav">
      <div
        className={`menu-toggle ${
          isNavOpen ? "menu-toggle-active" : "menu-toggle"
        }`}
        onClick={() => setNavOpen(!isNavOpen)}
      >
        <div className="menu-btn-bgr"></div>
      </div>
      <div
        className={`nav-dg-layout ${isNavOpen ? "nav-bg-active" : "nav-bg"}`}
      >
        {/* -------log - dashbord - name----------- */}
        <div className="logo-con">
          <div className="icon-con">
            <Link className="all-a-icons" to="/adminlogin">
              <ImLab className="site-log" />
            </Link>
            <h1
              className={`${
                isNavOpen ? "site-name-h1-active" : "site-name-h1"
              }`}
            >
              Lab
            </h1>
          </div>
          <h1
            className={`${isNavOpen ? "site-name-h1-active" : "site-name-h1"}`}
          >
            Appointment <br /> System
          </h1>
        </div>
        {/* ------------nav itmes------------------- */}
        <div className="nav-list">
          <div>
            <NavLink className="nav-item-con" to="/appointments">
              <Link className="all-a-icons" to="/appointments">
                <HiOutlineClipboardList className="nav-item-icon" />
              </Link>
              <Link
                className={`${
                  isNavOpen ? "nav-item-con-a-active" : "nav-item-con-a"
                }`}
                to="/appointments"
              >
                Appointment
              </Link>
            </NavLink>
          </div>
          <div>
            <NavLink className="nav-item-con" to="/viewAppointments">
              <Link className="all-a-icons" to="/viewAppointments">
                <HiOutlineClipboardList className="nav-item-icon" />
              </Link>
              <Link
                className={`${
                  isNavOpen ? "nav-item-con-a-active" : "nav-item-con-a"
                }`}
                to="/viewAppointments"
              >
                View Appointment
              </Link>
            </NavLink>
          </div>

          <div>
            <NavLink className="nav-item-con" to="/registration">
              <Link className="all-a-icons" to="/registration">
                <HiOutlinePencilAlt className="nav-item-icon" />
              </Link>
              <Link
                className={`${
                  isNavOpen ? "nav-item-con-a-active" : "nav-item-con-a"
                }`}
                to="/registration"
              >
                Registration
              </Link>
            </NavLink>
          </div>
          <div>
            <NavLink className="nav-item-con" to="/adminregistration">
              <Link className="all-a-icons" to="/adminregistration">
                <HiOutlinePencilAlt className="nav-item-icon" />
              </Link>
              <Link
                className={`${
                  isNavOpen ? "nav-item-con-a-active" : "nav-item-con-a"
                }`}
                to="/adminregistration"
              >
                Admin Registration
              </Link>
            </NavLink>
          </div>
          <div>
            <NavLink className="nav-item-con" to="/testdetails">
              <Link className="all-a-icons" to="/testdetails">
                <CgDetailsMore className="nav-item-icon" />
              </Link>
              <Link
                className={`${
                  isNavOpen ? "nav-item-con-a-active" : "nav-item-con-a"
                }`}
                to="/testdetails"
              >
                Test Details
              </Link>
            </NavLink>
          </div>
          <div>
            <NavLink className="nav-item-con" to="/payment">
              <Link className="all-a-icons" to="/payment">
                <RiSecurePaymentLine className="nav-item-icon" />
              </Link>
              <Link
                className={`${
                  isNavOpen ? "nav-item-con-a-active" : "nav-item-con-a"
                }`}
                to="/payment"
              >
                Payment
              </Link>
            </NavLink>
          </div>
          <div>
            <NavLink className="nav-item-con" to="/patients">
              <Link className="all-a-icons" to="/patients">
                <BsPeople className="nav-item-icon" />
              </Link>
              <Link
                className={`${
                  isNavOpen ? "nav-item-con-a-active" : "nav-item-con-a"
                }`}
                to="/patients"
              >
                Patients
              </Link>
            </NavLink>
          </div>
        </div>
        {/* ------------nav itmes--end----------------- */}
        <div className={`logout-con ${isNavOpen ? "logout-con-active" : ""}`}>
          <span className="admin-span">Welcome Admin</span>
          <Link
            className={`${isNavOpen ? "logout-active" : "logout"}`}
            to="/patientlogin"
          >
            <Link
              className={`${
                isNavOpen ? "nav-item-con-a-active" : "nav-item-con-a"
              }`}
              to="/patientlogin"
            >
              Log Out
            </Link>
            <Link className="all-a-icons" to="/patientlogin">
              <TbLogout className="nav-item-icon" />
            </Link>
          </Link>
        </div>

        {/* ------------------------------- */}
      </div>
    </nav>
  );
};
export default SideNav;
