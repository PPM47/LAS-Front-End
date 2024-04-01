import { useState } from "react";
// import { Link } from "react-router-dom";
import FormInput from "../components/formInput";
import Img2 from "../png/lab-worker-mask-examines-test-tubes-conducts-microscopic-studies.webp";
import { useNavigate } from 'react-router-dom';
import { FaUserMd } from "react-icons/fa";
import axios from "axios";
export default function AdminLogin() {
  const [logvalues, setValues] = useState({
    email: "",
    password: "",
  });
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
 
  const onChange = (e) => {
    setValues({ ...logvalues, [e.target.name]: e.target.value });
  };
  // const [isLoding, setIsLoding] = useState(false);
  // Function to handle form submission
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://localhost:9098/api/admin/login', { 
          email: logvalues.email,
          password: logvalues.password
         });
         alert("Admin Login Successful");
        console.log(response.data); // Handle success
        navigate('/app'); // Redirect to main page
    } catch (error) {
        console.error('Login failed:', error.response.data); // Handle error
        alert("Admin Login Failure!");
    }
};

 
 
  
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
       <div className="bg-blur"> <img className="welcom-img-bg" src={Img2} alt="" /></div>
      <div className="login-main-continer">
        <section className="form-main-continer login-main">
          <div className="form-name-logo-con">
            <div className="form-icon-con">
              < FaUserMd />
            </div>
            <div className="form-name-con" >
              <span className="Login-main-text">Admin LogIn</span>
            </div>
          </div>

          <form className="admin-log-form" onSubmit={handleLogin}>
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
