
import { CiMedicalCross, CiMedicalClipboard } from "react-icons/ci";
import { FaHandHoldingMedical, FaHouseMedical } from "react-icons/fa6";
import { MdManageSearch } from "react-icons/md";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import FormInput from "../components/formInput";
export default function TestDetails() {
  const [values, setTDValues] = useState({
    patientid: "",
  });
  const [patient, setpatientdt] = useState([]);
  const [appointments, setpatientdat] = useState([]);

  const [pdisLoding, setpdIsLoding] = useState(false);

  const onChange = (e) => {
    setTDValues({ ...values, [e.target.name]: e.target.value });
  };
  const pdhandleSubmit = async (e) => {
    e.preventDefault();
    setpdIsLoding(true);
    try {
      const response = await axios.get(
        `http://localhost:9098/api/patient/id/${values.patientid}`
      );
      setpatientdt(response.data);

      const responses = await axios.get(
        `http://localhost:9098/api/appointment/pAppointment/${values.patientid}`
      );
      setpatientdat(responses.data);

      setpdIsLoding(false);
    } catch (error) {
      console.error("Error fetching appointments:", error);
      setpdIsLoding(false);
    }

   
  };

  const tdinputs = [
    {
      id: 1,
      inpuConClass: "fromInput field-con",
      name: "patientid",
      placeholder: "Patient ID",
      type: "text",
      errorMessage:
        "Patient ID should be 6 characters long",
      label: "Patient ID",
     
      required: true,
    },
  ];

  console.log(values);
  return (
    <main className="reg-from-center">
      <div className="page-name-con">
        <div className="page-name-spaceholder"></div>
        <span className="page-log-span">
          <MdManageSearch />
        </span>
        <h1 className="page-name-h1"> Patient Details</h1>
      </div>

      <section className="form-main-continer">
        <div className="page-bg-min-con">
          <div className="page-background page-back-1">
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
          <div className="page-background page-back-4">
            <CiMedicalClipboard />
          </div>
        </div>
        <div className="form-name-logo-con">
          <div className="form-icon-con">
            <MdManageSearch />
          </div>
          <div className="form-name-con">
            <span></span>
          </div>
        </div>
       

        <form className="reg-from-con" onSubmit={pdhandleSubmit}>
          {tdinputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          <button button disabled={pdisLoding}>
            Search
          </button>
        </form>
        <div className="form-name-logo-con">
          <div className="form-icon-con">
           
          </div>
          <div className="form-name-con">
            <span>Patient Details</span>
          </div>
        </div>

        <div className="table-main-con">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Patient ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Gender</th>
                <th>Number</th>
                <th>Email</th>
                <th>password</th>
                
              </tr>
            </thead>
            <tbody className="table-body">
              {patient.map((Patient) => (
                <tr key={Patient.id}>
                  <td>{Patient.patientId}</td>
                  <td>{Patient.patientFName}</td>
                  <td>{Patient.patientLName}</td>
                  <td>{Patient.gender}</td>
                  <td>{Patient.number}</td>
                  <td>{Patient.email}</td>
                  <td>{Patient.password}</td>
                
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="form-name-logo-con">
          <div className="form-icon-con">
        
          </div>
          <div className="form-name-con">
            <span>Patient Appointment Details</span>
          </div>
        </div>
        {/* <form className="reg-from-con" onSubmit={padhandleSubmit}>
          {tdinputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}

          <button button disabled={padisLoding}>Search</button>
        </form> */}

        <div className="table-main-con">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Appointment ID</th>
                <th>Test Type</th>
                <th>Doctor Name</th>
                <th>Date</th>
                <th>Time</th>
                <th>Email</th>
                <th>Patient ID</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="table-body">
            {appointments.map((appointment) => (
                <tr key={appointment.id}>
                  <td>{appointment.appointmentId}</td>
                  <td>{appointment.testCatagory}</td>
                  <td>{appointment.doctorName}</td>
                  <td>{appointment.date}</td>
                  <td>{appointment.time}</td>
                  <td>{appointment.email}</td>
                  <td>{appointment.patientId}</td>
                  <td>
                    <button className="btn btn-primary">
                    <Link className="sign-in-link" to="/payment">
                      Pay
                    </Link>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
