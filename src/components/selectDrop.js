import React from "react";

// import { faCheck } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SelectDrop = (props) => {
  const {
    selectcon,
    optionName1,
    optionName2,
    optionName3,
    optionName4,
    optionName5,
    inpuConClass,
    errorMessage,
    value1,
    value2,
    value3,
    value4,
    value5,
    onChange,
    placeholder,
    id,
    ...inputProps
  } = props;
  return (
    <div className={` ${inpuConClass} `}>
      
      <select  className={` ${selectcon} `}
        {...inputProps}
        onChange={onChange}>
        <option  value={value1}>{optionName1}</option>
        <option  value={value2}>{optionName2}</option>
        <option  value={value3}>{optionName3}</option>
        <option  value={value4}>{optionName4}</option>
        <option  value={value5}>{optionName5}</option>
      </select>
      
      <span className="errormsg">{errorMessage}</span>
    </div>
  );
};
export default SelectDrop;
