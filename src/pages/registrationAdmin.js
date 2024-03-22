// import { useRef } from "react";

import { CiMedicalCross, CiMedicalClipboard } from "react-icons/ci";
import { FaHandHoldingMedical,FaHouseMedical } from "react-icons/fa6";
import { MdOutlineStreetview } from "react-icons/md";
import { Link } from "react-router-dom";
import FormInput from "../components/formInput";
import { useState} from "react";
import axios from "axios";

export default function Registration() {
  
  const [values, setValues] = useState({
    adminName: "",
    email: "",
    password: "",

  });
  const [isLoding, setIsLoding] = useState(false);
 
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoding(true);
    try {
      const responce = await axios.post('http://localhost:9098/api/admin/Reg', {
        adminName: values.adminName,
        email: values.email,
        password: values.password,

    });
    alert("Admin Registration Successful");
   
    }
    catch(err){
      console.log(err);
      alert("Admin already exsist or invalid email. Registration Failure!");
    }
    setIsLoding(false);
  }

 
 
  const inputs = [
    {
      id: 10,
      inpuConClass: "fromInput field-con",
      name: "adminName",
      placeholder: "Full Name",
      type: "text",
      errorMessage: "Please enter your first name",
      label: "Full Name",
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
    {
      id: 8,
      inpuConClass: "fromInput field-con",
      name: "confirmpassword",
      placeholder: "Confirm Password",
      type: "password",
      errorMessage: "Password don't match",
      pattern: values.password,
      label: "Confirm Password",
      required: true,
    },
  ];


  return (
    <main className="reg-from-center">
      <div className="page-name-con">
        <div className="page-name-spaceholder"></div>
        <span className="page-log-span">
          <MdOutlineStreetview />
        </span>
        <h1 className="page-name-h1">Admin Registration</h1>
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
            <MdOutlineStreetview />
          </div>
          <div className="form-name-con">
            <span>Admin Registration</span>
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
          >Submit</button>
        </form>
        <p className="alredy-have-a-p">
          Already registered?
          <br />
        </p>
        <span className="sign-in-span">
          {/*put router link here*/}
          <Link className="sign-in-link" to="/adminlogin">
            Sign In
          </Link>
        </span>
      </section>
    </main>
  );
}
