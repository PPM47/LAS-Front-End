import { Link } from "react-router-dom";
import { CiMedicalCross, CiMedicalClipboard } from "react-icons/ci";
import { FaHandHoldingMedical,FaHouseMedical } from "react-icons/fa6";
import { useState } from "react";
import axios from "axios";
import FormInput from "../components/formInput";
import { CgDetailsMore } from "react-icons/cg";
export default function ViewAppointment() {
  const [values, setValues] = useState({
    patientid: "",
    appointmentid: "",
  });
 

  const [isLoding, setIsLoding] = useState(false);
 
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
   
    e.preventDefault();
    setIsLoding(true);
    try {
      const responce = await axios.get('http://localhost:9098/api/admin/Reg', {
        patientid: values.patientid,
        appointmentid: values.appointmentid

    });
    
   
    }
    catch(err){
      console.log(err);
      alert("Admin Registration Failure!");
    }
    setIsLoding(false);
  }
  
  console.log(values);

  const tdinputs = [
   
    {
      id: 5,
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
        <div className="page-name-spaceholder"></div>
        <span className="page-log-span">
          <CgDetailsMore />
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
            <CgDetailsMore />
          </div>
          <div className="form-name-con">
            <span>View Appointment</span>
          </div>
        </div>

        <form className="reg-from-con" onSubmit={handleSubmit}>
          {tdinputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}

          <button
           disabled={isLoding}
          >Search</button>
        </form>
       
      </section>
    </main>
  );
}
