// import { Link } from "react-router-dom";
import { CiMedicalCross, CiMedicalClipboard } from "react-icons/ci";
import { FaHandHoldingMedical, FaHouseMedical } from "react-icons/fa6";
import axios from "axios";
// import { MdDeleteSweep } from "react-icons/md";
import { HiOutlineClipboardList } from "react-icons/hi";
import SelectDrop from "../components/selectDrop";
import FormInput from "../components/formInput";

import { useState } from "react";
export default function TestReport() {
  const [values, setValues] = useState({
    appointmentId: "",
    testCatagory: "",
    email: "",
    chloride: "",
    proteins: "",
    sugar: "",
    polymorphs: "",
    lymphocytes: "",
    anyother: "",
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
        "http://localhost:9098/api/testReport/reportSubmit",
        {
          appointmentId: values.appointmentId,
          testCatagory: values.testCatagory,
          email: values.email,
          chloride: values.chloride,
          proteins: values.proteins,
          sugar: values.sugar,
          polymorphs: values.polymorphs,
          lymphocytes: values.lymphocytes,
          anyother: values.anyother,
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
    //------------------------------test report search--------------------------------------
  const [trsvalues, settrsValues] = useState({
    appointmentId: "",
  });

  const [testReport, setTestReport] = useState([]);
  const [istrsLoding, setIstrsLoding] = useState(false);

  const onsChange = (e) => {
    settrsValues({ ...trsvalues, [e.target.name]: e.target.value });
  };

  const fetchTestReport = async (e) => {
    e.preventDefault();
    setIstrsLoding(true);
    try {
      const response = await axios.get(
        `http://localhost:9098/api/testReport/search/${trsvalues.appointmentId}`
      );
      setTestReport(response.data);
      setIstrsLoding(false);
    } catch (error) {
      console.error("Error fetching appointments:", error);
      setIstrsLoding(false);
    }
  };
  const trsinput = [
   
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
  
  ];
 //------------------------------test report search--------------------------------------

  //------------------------test report Delete--------------------------------------------
//   const [deletevalues, setDValues] = useState({
//     appointmentId: "",
//     patientId: "",
//     email: "",
//   });
//   const [disLoding, setDIsLoding] = useState(false);
//   const onDChange = (e) => {
//     setDValues({ ...deletevalues, [e.target.name]: e.target.value });
//   };
//   //handleDeleteSubmit
//   const handleDeleteSubmit = async (e) => {
//     e.preventDefault();
//     setDIsLoding(true);
//     try {
//       const responce = await axios.delete(
//         `http://localhost:9098/api/appointment/delete/${deletevalues.appointmentId}`,
//         {
//           data: {
//             patientId: deletevalues.patientId,
//             email: deletevalues.email,
//           },
//         }
//       );
//       alert("Appointment Cancel Successful");
//     } catch (err) {
//       console.log(err);
//       alert("Appointment Cancel Failure!");
//     }
//     setDIsLoding(false);
//   };

//   //-----------------------------test report Delete---------------------------------------
//   console.log(values);
//   console.log(deletevalues);

//   const deleteinputs = [
//     {
//       id: 31,
//       inpuConClass: "fromInput field-con",
//       name: "patientId",
//       placeholder: "Patient ID",
//       type: "text",
//       errorMessage: "Patient ID should be 6 characters long",
//       label: "Patient ID",
//       required: true,
//     },

//     {
//       id: 30,
//       inpuConClass: "fromInput field-con",
//       name: "appointmentId",
//       placeholder: "Appointment ID",
//       type: "text",
//       errorMessage: "Appointment ID should be 8 characters long",
//       label: "Appointment ID",
//       required: true,
//     },
//     {
//       id: 32,
//       inpuConClass: "fromInput field-con",
//       name: "email",
//       placeholder: "Email",
//       type: "email",
//       errorMessage: "Please enter a valid email address",
//       label: "Email",
//       required: true,
//     },
//   ];
  //---------------------------test report Delete-----------------------------------------

  const selectapinputs = [
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
  const apinputs = [
    {
      id: 40,
      inpuConClass: "fromInput field-con",
      name: "chloride",
      placeholder: "Chloride",
      type: "text",
      errorMessage: "* required",
      label: "Chloride",
      required: true,
    },
    {
      id: 41,
      inpuConClass: "fromInput field-con",
      name: "proteins",
      placeholder: "Proteins",
      type: "text",
      errorMessage: "* required",
      label: "Proteins",
      required: true,
    },
    {
      id: 42,
      inpuConClass: "fromInput field-con",
      name: "sugar",
      placeholder: "Sugar",
      type: "text",
      errorMessage: "* required",
      label: "Sugar",
      required: true,
    },
    {
      id: 43,
      inpuConClass: "fromInput field-con",
      name: "polymorphs",
      placeholder: "Polymorphs",
      type: "text",
      errorMessage: "* required",
      label: "Polymorphs",
      required: true,
    },
    {
      id: 44,
      inpuConClass: "fromInput field-con",
      name: "lymphocytes",
      placeholder: "Lymphocytes",
      type: "text",
      errorMessage: "* required",
      label: "Lymphocytes",
      required: true,
    },
    {
      id: 45,
      inpuConClass: "fromInput field-con",
      name: "anyother",
      placeholder: "Anyother",
      type: "text",
      errorMessage: "* required",
      label: "Anyother",
      required: true,
    },
    {
      id: 49,
      inpuConClass: "fromInput field-con",
      name: "appointmentId",
      placeholder: "Appointment ID",
      type: "text",
      errorMessage: "Appointment ID should be 8 characters long",
      label: "Appointment ID",
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
  ];

  console.log(values);
  return (
    <main className="reg-from-center">
      <div className="page-name-con">
        <div className="page-name-spaceholder"></div>
        <span className="page-log-span">
          <HiOutlineClipboardList />
        </span>
        <h1 className="page-name-h1">TestReport</h1>
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
            <span>Report Submit</span>
          </div>
        </div>

        <form className="reg-from-con" method="POST" onSubmit={handleSubmit}>
          {selectapinputs.map((input) => (
            <SelectDrop
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          {apinputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}

          <button disabled={isLoding}>Submit</button>
        </form>
        {/* -------------------------------delete test report-------------------------------------- */}
        {/* <div className="form-name-logo-con">
          <div className="form-icon-con">
            <MdDeleteSweep />
          </div>
          <div className="form-name-con">
            <span>Report Delete</span>
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

          <button disabled={disLoding}>Delete</button>
        </form> */}
        {/* -------------------------------delete test report-------------------------------------- */}
        {/* --------------------------search test report------------------------------------------- */}
        <div className="form-name-logo-con">
          <div className="form-icon-con">
            
          </div>
          <div className="form-name-con">
            <span>View Test Report</span>
          </div>
        </div>
        <form
          className="reg-from-con"
          onSubmit={fetchTestReport}
          method="POST"
        >
          {trsinput.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={trsvalues[input.name]}
              onChange={onsChange}
            />
          ))}

          <button disabled={istrsLoding}>
            Search
          </button>
        </form>
        <h1 className="table-h1">Test Reports</h1>
        <div className="table-main-con">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Appointment ID</th>
                <th>Email</th>
                <th>Test Catagory</th>
                <th>Chloride</th>
                <th>Proteins</th>
                <th>Sugar</th>
                <th>Polymorphs</th>
                <th>Lymphocytes</th>
                <th>anyother</th>
              </tr>
            </thead>
            <tbody className="table-body">
              {testReport.map((testReports) => (
                <tr key={testReports.id}>
                  <td>{testReports.appointmentId}</td>
                  <td>{testReports.email}</td>
                  <td>{testReports.testCatagory}</td>
                  <td>{testReports.chloride}</td>
                  <td>{testReports.proteins}</td>
                  <td>{testReports.sugar}</td>
                  <td>{testReports.polymorphs}</td>
                  <td>{testReports.lymphocytes}</td>
                  <td>{testReports.anyother}</td>
                 
                </tr>
              ))}
            </tbody>
          </table>
        </div>
         {/* --------------------------search test report------------------------------------------- */}
      </section>
    </main>
  );
}
