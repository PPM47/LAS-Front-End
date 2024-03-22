import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { IoIosCreate } from "react-icons/io";
import { FaUserFriends } from "react-icons/fa";
import { TbReportMedical } from "react-icons/tb";
import { MdPageview } from "react-icons/md";
import { SiCashapp } from "react-icons/si";
import { ImLab } from "react-icons/im";
import { TbLogout } from "react-icons/tb";
import { MdOutlineStreetview } from "react-icons/md";
import { MdManageSearch } from "react-icons/md";


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
            <Link className="all-a-icons" to="/app">
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
                <MdPageview className="nav-item-icon" />
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
            <NavLink className="nav-item-con" to="/TestReport">
              <Link className="all-a-icons" to="/TestReport">
                <TbReportMedical className="nav-item-icon" />
              </Link>
              <Link
                className={`${
                  isNavOpen ? "nav-item-con-a-active" : "nav-item-con-a"
                }`}
                to="/TestReport"
              >
                TestReport
              </Link>
            </NavLink>
          </div>
        
         
          <div>
            <NavLink className="nav-item-con" to="/testdetails">
              <Link className="all-a-icons" to="/testdetails">
                <MdManageSearch className="nav-item-icon" />
              </Link>
              <Link
                className={`${
                  isNavOpen ? "nav-item-con-a-active" : "nav-item-con-a"
                }`}
                to="/testdetails"
              >
                Patient Details
              </Link>
            </NavLink>
          </div>
          <div>
            <NavLink className="nav-item-con" to="/PatientUpDel">
              <Link className="all-a-icons" to="/PatientUpDel">
                <FaUserFriends className="nav-item-icon" />
              </Link>
              <Link
                className={`${
                  isNavOpen ? "nav-item-con-a-active" : "nav-item-con-a"
                }`}
                to="/PatientUpDel"
              >
                Patients <br></br> Update/Delete
              </Link>
            </NavLink>
          </div>
          <div>
            <NavLink className="nav-item-con" to="/registration">
              <Link className="all-a-icons" to="/registration">
                <IoIosCreate className="nav-item-icon" />
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
                <MdOutlineStreetview className="nav-item-icon" />
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
            <NavLink className="nav-item-con" to="/payment">
              <Link className="all-a-icons" to="/payment">
                <SiCashapp className="nav-item-icon" />
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
        </div>
        {/* ------------nav itmes--end----------------- */}
        <div className={`logout-con ${isNavOpen ? "logout-con-active" : ""}`}>
          <span className="admin-span">Welcome Admin</span>
          <Link
            className={`${isNavOpen ? "logout-active" : "logout"}`}
            to="/adminlogin"
          >
            <Link
              className={`${
                isNavOpen ? "nav-item-con-a-active" : "nav-item-con-a"
              }`}
              to="/adminlogin"
            >
              Log Out
            </Link>
            <Link className="all-a-icons" to="/adminlogin">
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
