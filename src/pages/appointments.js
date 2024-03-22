// import { Link } from "react-router-dom";
import { CiMedicalCross, CiMedicalClipboard } from "react-icons/ci";
import { FaHandHoldingMedical, FaHouseMedical } from "react-icons/fa6";
import axios from "axios";
import { MdDeleteSweep } from "react-icons/md";
import { HiOutlineClipboardList } from "react-icons/hi";
import SelectDrop from "../components/selectDrop";
import FormInput from "../components/formInput";

import { useState } from "react";
export default function Appointments() {
  const [values, setValues] = useState({
    patientId: "",
    testCatagory: "",
    doctorName: "",
    date: "",
    time: "",
    email: "",
  });
  const [isLoding, setIsLoding] = useState(false);

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoding(true);
    try {
      const responce = await axios.post(
        "http://localhost:9098/api/appointment/make",
        {
          patientId: values.patientId,
          testCatagory: values.testCatagory,
          doctorName: values.doctorName,
          date: values.date,
          time: values.time,
          email: values.email,
        }
      );
      alert("Patient Registration Successful");
      setIsLoding(false);
    } catch (err) {
      console.log(err);
      alert("Patient Registration Failure!", err);
      setIsLoding(false);
    }
  };
  
  //--------------------------------------------------------------------
  const [deletevalues, setDValues] = useState({
    appointmentId: "",
    patientId: "",
    email: "",
  });
  const [disLoding, setDIsLoding] = useState(false);
  const onDChange = (e) => {
    setDValues({ ...deletevalues, [e.target.name]: e.target.value });
  };
  //handleDeleteSubmit
  const handleDeleteSubmit = async (e) => {
    e.preventDefault();
    setDIsLoding(true);
    try {
      const responce = await axios.delete(
        `http://localhost:9098/api/appointment/delete/${deletevalues.appointmentId}`,
        {
          data: {
            patientId: deletevalues.patientId,
            email: deletevalues.email
          }
        }
      );
      alert("Appointment Cancel Successful");
    } catch (err) {
      console.log(err);
      alert("Appointment Cancel Failure!");
    }
    setDIsLoding(false);
  };
  //--------------------------------------------------------------------
  console.log(values);
  console.log(deletevalues);

  const deleteinputs = [
    {
      id: 31,
      inpuConClass: "fromInput field-con",
      name: "patientId",
      placeholder: "Patient ID",
      type: "text",
      errorMessage: "Patient ID should be 6 characters long",
      label: "Patient ID",
      required: true,
    },

    {
      id: 30,
      inpuConClass: "fromInput field-con",
      name: "appointmentId",
      placeholder: "Appointment ID",
      type: "text",
      errorMessage: "Appointment ID should be 8 characters long",
      label: "Appointment ID",
      required: true,
    },
    {
      id: 32,
    inpuConClass: "fromInput field-con",
    name: "email",
    placeholder: "Email",
    type: "email",
    errorMessage: "Please enter a valid email address",
    label: "Email",
    required: true,
  },
  ];
  //--------------------------------------------------------------------

  const apinputs = [
    {
      id: 1,
      inpuConClass: "fromInput field-con",
      name: "patientId",
      placeholder: "Patient ID",
      type: "text",
      errorMessage: "Patient ID should be 6 characters long",
      label: "Patient ID",
      maxLength: "6",
      required: true,
    },
    {
      id: 3,
      inpuConClass: "fromInput field-con",
      name: "doctorName",
      placeholder: "Doctor Name",
      type: "text",
      errorMessage: "Please enter doctor(name) who reccmended the test",
      label: "Doctor Name",
      required: true,
    },

    {
      id: 2,
      inpuConClass: "fromInput field-con",
      name: "email",
      placeholder: "Email",
      type: "email",
      errorMessage: "Please enter a valid email address",
      label: "Email",
      required: true,
    },
    {
      id: 5,
      inpuConClass: "fromInput field-con bir-date",
      name: "date",
      placeholder: "Date",
      type: "date",
      errorMessage: "Please enter your date",
      label: "Date",
      required: true,
    },
  ];
  const selectapinputs = [
    {
      id: 56,
      inpuConClass: "fromInput field-con",
      name: "time",
      placeholder: "time",
      type: "",
      optionName1: "please select time slot",
      optionName2: "8:00am - 10:00am",
      optionName3: "10:30 - 12:30pm",
      optionName4: "2:00pm - 4:00pm",
      optionName5: "6:00pm - 8:00pm",
      value1: "",
      value2: "8:00am - 10:00am",
      value3: "10:30 - 12:30pm",
      value4: "2:00pm - 4:00pm",
      value5: "6:00pm - 8:00pm",
      errorMessage: "Please select time slot",
      label: "time slot",
      required: true,
    },
    {
      id: 55,
      inpuConClass: "fromInput field-con",
      name: "testCatagory",
      placeholder: "Test Catagory",
      type: "",
      optionName1: "Please select test catagory",
      optionName2: "Blood Count",
      optionName3: "Urinalysis",
      optionName4: "Glucose",
      optionName5: "ESR",
      value1: "",
      value2: "Blood Count",
      value3: "Urinalysis",
      value4: "Glucose",
      value5: "ESR",
      errorMessage: "Please select test catagory",
      label: "Test catagory",
      required: true,
    },
  ];

  console.log(values);
  return (
    <main className="reg-from-center">
      <div className="page-name-con">
        <div className="page-name-spaceholder"></div>
        <span className="page-log-span">
          <HiOutlineClipboardList />
        </span>
        <h1 className="page-name-h1">Appointment</h1>
      </div>

      <section className="form-main-continer">
        <div className="page-bg-min-con">
          <div className="page-background page-back-4">
            <FaHouseMedical />
          </div>
          <div className="page-background page-back-5">
            <CiMedicalCross />
          </div>
          <div className="page-background page-back-2">
            <CiMedicalCross />
          </div>
          <div className="page-background page-back-3">
            <FaHandHoldingMedical />
          </div>
          <div className="page-background page-back-1">
            <CiMedicalClipboard />
          </div>
        </div>
        <div className="form-name-logo-con">
          <div className="form-icon-con">
            <HiOutlineClipboardList />
          </div>
          <div className="form-name-con">
            <span>Make Appointment</span>
          </div>
        </div>

        <form className="reg-from-con" method="POST" onSubmit={handleSubmit}>
          {apinputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          {selectapinputs.map((input) => (
            <SelectDrop
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}

          <button disabled={isLoding}>Submit</button>
        </form>
        {/* --------------------------------------------------------------------- */}
        <div className="form-name-logo-con">
          <div className="form-icon-con">
            <MdDeleteSweep />
          </div>
          <div className="form-name-con">
            <span>Appointment Cancel</span>
          </div>
        </div>
        <form className="reg-from-con" onSubmit={handleDeleteSubmit}>
          {deleteinputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={deletevalues[input.name]}
              onChange={onDChange}
            />
          ))}

          <button disabled={disLoding}>Cancel</button>
        </form>
      </section>
    </main>
  );
}
