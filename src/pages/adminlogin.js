import { useState } from "react";
// import { Link } from "react-router-dom";
import FormInput from "../components/formInput";
import { RiAdminLine } from "react-icons/ri";
import { Navigate } from 'react-router-dom';
import axios from "axios";
export default function AdminLogin() {
  const [logvalues, setValues] = useState({
    email: "",
    password: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

 
  const onChange = (e) => {
    setValues({ ...logvalues, [e.target.name]: e.target.value });
  };
  // const [isLoding, setIsLoding] = useState(false);
  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    try {
      const responce = await axios.post('http://localhost:9098/api/admin/login', {
      
        email: logvalues.email,
        password: logvalues.password,

    });
    alert("Admin Registration Successful");
   
    }
    catch(err){
      console.log(err);
      alert("Admin already exsist or invalid email. Registration Failure!");
    }
    setIsLoggedIn(false);
  }

 
  if (isLoggedIn) {
    return <Navigate to="/appointments" />;
  }
  
  const aLInputs = [
    {
      id: 201,
      inpuConClass: "fromInput field-con",
      name: "email",
      placeholder: "Email",
      type: "email",
      errorMessage: "Please enter a valid email address",
      label: "Email",
      required: true,
    },
    {
      id: 202,
      inpuConClass: "fromInput field-con",
      name: "password",
      placeholder: "Password",
      type: "password",
      errorMessage: "Password is required",
      // pattern: `^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,19}$`,
      label: "Password",
      required: true,
    },
  ];

 
  console.log(logvalues);
  return (
    <div className="login-page-main-continer">
      <div className="login-main-continer">
        <section className="form-main-continer login-main">
          <div className="form-name-logo-con">
            <div className="form-icon-con">
              <RiAdminLine />
            </div>
            <div className="form-name-con">
              <span>Admin LogIn</span>
            </div>
          </div>

          <form className="admin-log-form" onSubmit={handleSubmit}>
            {aLInputs.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={logvalues[input.name]}
                onChange={onChange}

              />
            ))}

            <button>LogIn</button>
          </form>
         
        </section>
      </div>
    </div>
  );
}
