// import { useRef } from "react";

import { CiMedicalCross, CiMedicalClipboard } from "react-icons/ci";
import { FaHandHoldingMedical,FaHouseMedical } from "react-icons/fa6";

import { SiCashapp } from "react-icons/si";
// import { Link } from "react-router-dom";
import FormInput from "../components/formInput";
import { useState} from "react";
import axios from "axios";

export default function Registration() {
  
  const [values, setValues] = useState({
    name: "",
    patientId: "",
    appointmentId: "",
    email: "",
    amount: ""
   
  });
  const [isLoding, setIsLoding] = useState(false);
 
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoding(true);
    try {
      const responce = await axios.post('http://localhost:9098/api/appointment/payment', {
        name: values.name,
        patientId: values.patientId, 
        appointmentId: values. appointmentId,
        email: values.email,
        amount: values.amount
        
        
    });
    alert("Payment Successful");
   
    }
    catch(err){
      console.log(err);
      alert("Payment Failure!");
    }
    setIsLoding(false);
  }

 
 
  const inputs = [
    {
      id: 10,
      inpuConClass: "fromInput field-con",
      name: "name",
      placeholder: "Name",
      type: "text",
      errorMessage: "Please enter your name",
      label: "Name",
      required: true,
    },
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
    {
      id: 11,
      inpuConClass: "fromInput field-con",
      name: "amount",
      placeholder: "Amount",
      type: "number",
      errorMessage: "Please enter amount",
      label: "amount",
      required: true,
    },
   
  ];

  


  return (
    <main className="reg-from-center">
      <div className="page-name-con">
        <div className="page-name-spaceholder"></div>
        <span className="page-log-span">
          <SiCashapp />
        </span>
        <h1 className="page-name-h1">Payment</h1>
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
            <SiCashapp />
          </div>
          <div className="form-name-con">
            <span>Payment</span>
          </div>
        </div>

        <form className="reg-from-con" onSubmit={handleSubmit}>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          
       

          <button
          disabled={isLoding}
          >Pay</button>
        </form>
       
      </section>
    </main>
  );
}
