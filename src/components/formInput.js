import React, { useState } from "react";

// import { faCheck } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const {
    genderinuptcl,
    inpuConClass,
    errorMessage,
    label,
    onChange,
    value,
    id,
    ...inputProps
  } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className={` ${inpuConClass} `}>
      <label htmlFor="username">{label}</label>
      <input
        className={` ${genderinuptcl} `}
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        focused={focused.toString()}
      ></input>
      <span className="errormsg">{errorMessage}</span>
    </div>
  );
};
export default FormInput;
