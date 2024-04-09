// import { Link } from "react-router-dom";
import { CiMedicalCross, CiMedicalClipboard } from "react-icons/ci";
import { FaHandHoldingMedical, FaHouseMedical } from "react-icons/fa6";
import axios from "axios";
// import { MdDeleteSweep } from "react-icons/md";
import jsPDF from "jspdf";
import pdfimg from "../png/Artboard 1.png";
import html2canvas from "html2canvas";
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
        "https://las-back-end.onrender.com/api/testReport/reportSubmit",
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
      alert("Test Report Submit Successful");
      setIsLoding(false);
    } catch (err) {
      console.log(err);
      alert("Test Report Submit Failure!", err);
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
        `https://las-back-end.onrender.com/api/testReport/search/${trsvalues.appointmentId}`
      );
      setTestReport(response.data);
      setIstrsLoding(false);
    } catch (error) {
      console.error("Error fetching Report:", error);
      setIstrsLoding(false);
    }
  };

  const downloadPDF = () => {
    const pdf = new jsPDF();
    pdf.setFontSize(12);
    pdf.setLineHeightFactor(1.5);
    pdf.setFont("helvetica");
    pdf.setTextColor(1, 82, 175);
    const contentHeight = (testReport.length + 2) * 50;
    pdf.internal.pageSize.height = contentHeight;
    let y = 10;
    const imgData = pdfimg;
    pdf.addImage(imgData, "PNG", 100, 10, 9, 9);
    y += 15;
    pdf.text(97, y, `ABC Lab`);
    y += 10;

    testReport.forEach((testReport, index) => {
      pdf.text(
        40,
        y,
        "---------------------------------------------------------------------------------------------"
      );
      y += 10;
      // pdf.text(30, y, `0${index + 1} `);
      // y += 10;
      pdf.text(20, y, `Test Type:- ${testReport.testCatagory}`);

      y += 10;
      pdf.text(20, y, `Email:- ${testReport.email}`);
      y += 10;
      pdf.text(20, y, `Chloride:- ${testReport.chloride}`);
      y += 10;
      pdf.text(20, y, `Proteins:- ${testReport.proteins}`);
      y += 10;
      pdf.text(20, y, `Sugar:- ${testReport.sugar}`);
      y += 10;
      pdf.text(20, y, `Polymorphs:- ${testReport.polymorphs}`);
      y += 10;
      pdf.text(20, y, `Lymphocytes:- ${testReport.lymphocytes}`);
      y += 10;
      pdf.text(20, y, `anyother:- ${testReport.anyother}`);
      y += 10;
      pdf.text(
        40,
        y,
        "---------------------------------------------------------------------------------------------"
      );
    });

    pdf.save("testReport.pdf");
  };
  const trsinput = [
    {
      id: 30,
      inpuConClass: "fromInput field-con",
      name: "appointmentId",
      placeholder: "Appointment ID",
      maxLength: "8",
      type: "text",
      errorMessage: "Appointment ID should be 8 characters long",
      label: "Appointment ID",
      required: true,
    },
  ];

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
      maxLength: "8",
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
        <div className="page-bg-min-con-nav">
          <div className="page-background-nav page-back-1-nav">
            <CiMedicalCross />
          </div>
          <div className="page-background-nav page-back-3-nav">
            <CiMedicalCross />
          </div>
          <div className="page-background-nav page-back-2-nav">
            <FaHandHoldingMedical />
          </div>
          <div className="page-background-nav page-back-4-nav">
            <CiMedicalClipboard />
            <FaHouseMedical />
          </div>

          <div className="page-background-nav page-back-5-nav">
            <CiMedicalClipboard />
          </div>
        </div>
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

        {/* --------------------------search test report------------------------------------------- */}
        <div className="form-name-logo-con">
          <div className="form-icon-con"></div>
          <div className="form-name-con">
            <span>View Test Report</span>
          </div>
        </div>
        <form className="reg-from-con" onSubmit={fetchTestReport} method="POST">
          {trsinput.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={trsvalues[input.name]}
              onChange={onsChange}
            />
          ))}

          <button disabled={istrsLoding}>Search</button>
        </form>
        <h1 className="table-h1">Test Reports</h1>
        <div className="table-main-con">
          <table id="testReportList" className="table table-striped">
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
                <th>Download</th>
              </tr>
            </thead>
            <tbody className="table-body">
              {testReport.map((testReports, index) => (
                <tr key={index}>
                  <td>{testReports.appointmentId}</td>
                  <td>{testReports.email}</td>
                  <td>{testReports.testCatagory}</td>
                  <td>{testReports.chloride}</td>
                  <td>{testReports.proteins}</td>
                  <td>{testReports.sugar}</td>
                  <td>{testReports.polymorphs}</td>
                  <td>{testReports.lymphocytes}</td>
                  <td>{testReports.anyother}</td>
                  <td>
                    <button onClick={downloadPDF}>PDF</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {isLoding && <p>Loading...</p>}
        </div>
        {/* --------------------------search test report------------------------------------------- */}
      </section>
    </main>
  );
}
