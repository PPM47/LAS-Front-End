import { CiMedicalCross, CiMedicalClipboard } from "react-icons/ci";
import { FaHandHoldingMedical, FaHouseMedical } from "react-icons/fa6";
import { MdDeleteSweep } from "react-icons/md";
import { MdPageview } from "react-icons/md";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import FormInput from "../components/formInput";

export default function ViewAppointment() {
  const [values, setValues] = useState({
    date: "",
  });

  const [appointments, setAppointments] = useState([]);
  const [isLoding, setIsLoding] = useState(false);

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const fetchAppointments = async (e) => {
    e.preventDefault();
    setIsLoding(true);
    try {
      const response = await axios.get(
        `https://las-back-end.onrender.com/api/appointment/today/${values.date}`
      );
      setAppointments(response.data);
      setIsLoding(false);
    } catch (error) {
      console.error("Error fetching appointments:", error);
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
        `https://las-back-end.onrender.com/api/appointment/delete/${deletevalues.appointmentId}`,
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
  
  const deleteinputs = [
    {
      id: 31,
      inpuConClass: "fromInput field-con",
      name: "patientId",
      placeholder: "Patient ID",
      maxLength: "6",
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

  console.log(values.date);

  const inputs = [
    {
      id: 50,
      inpuConClass: "fromInput field-con bir-date",
      name: "date",
      placeholder: "Date",
      type: "date",
      errorMessage: "Please select date",
      label: "Date",
      required: true,
    },
  ];

  return (
    <main className="reg-from-center">
      <div className="page-name-con">
      <div className="page-bg-min-con-nav">
          <div className="page-background-nav page-back-1-nav">
            <FaHouseMedical />
          </div>
          <div className="page-background-nav page-back-5-nav">
            <CiMedicalCross />
          </div>
          <div className="page-background-nav page-back-2-nav">
            <CiMedicalCross />
          </div>
          <div className="page-background-nav page-back-3-nav">
            <FaHandHoldingMedical />
          </div>
          <div className="page-background-nav page-back-4-nav">
            <CiMedicalClipboard />
          </div>
        </div>
        <div className="page-name-spaceholder"></div>
        <span className="page-log-span">
          <MdPageview />
        </span>
        <h1 className="page-name-h1">View Appointment</h1>
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
            <MdPageview />
          </div>
          <div className="form-name-con">
            <span>View Appointment</span>
          </div>
        </div>

        <form
          className="reg-from-con"
          onSubmit={fetchAppointments}
          method="POST"
        >
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}

          <button disabled={isLoding}>
            Search
          </button>
        </form>
        <h1 className="table-h1">Appointments</h1>
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
