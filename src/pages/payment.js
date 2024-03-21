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
    patientFName: "",
    patientLName: "",
    number: "",
    email: "",
    password: "",
    phonenumber: "",
    gender: "",
  });
  const [isLoding, setIsLoding] = useState(false);
 
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoding(true);
    try {
      const responce = await axios.post('http://localhost:9098/api/patient/Reg', {
        patientFName: values.patientFName,
        patientLName: values.patientLName,
        number: values.number, 
        email: values.email,
        password: values.password,
        phonenumber: values.phonenumber,
        gender: values.gender
    });
    alert("Patient Registration Successful");
   
    }
    catch(err){
      console.log(err);
      alert("Patient already exsist or invalid email Registration Failure!");
    }
    setIsLoding(false);
  }

 
 
  const inputs = [
    {
      id: 10,
      inpuConClass: "fromInput field-con",
      name: "patientFName",
      placeholder: "First Name",
      type: "text",
      errorMessage: "Please enter your first name",
      label: "First Name",
      required: true,
    },
    {
      id: 1,
      inpuConClass: "fromInput field-con",
      name: "patientLName",
      placeholder: "Last Name",
      type: "text",
      errorMessage: "Please enter your last name",
      label: "Last Name",
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
      id: 3,
      inpuConClass: "fromInput field-con",
      name: "number",
      placeholder: "0712 345 678",
      type: "tel",
      pattern: "[0-9]{10}$",
      maxLength: "10",
      errorMessage: "Please enter a valid phone number",
      label: "Phone Number",
      required: true,
    },
   
  ];

  const inputs2 = [
  

    {
      id: 7,
      inpuConClass: "fromInput field-con",
      name: "password",
      placeholder: "Password",
      type: "password",
      errorMessage:
        "Password should be 8-20 characters and include 1 letter, 1 number and 1 special character",
      pattern: `^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,19}$`,
      label: "Password",
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
          
           {inputs2.map((input) => (
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
