import React from 'react';
import "./DrkToggle.css";

const DrkToggle = ({ handleChange, isChecked }) => {

  return (
     <div className = "toggle-container">
         <input
            type = "checkbox"
            id = "check"
            className = "toggle"
            onChange = {handleChange}
            checked = {isChecked}
         />
         <label htmlFor = "check">Dark Mode</label>
     </div>
  );
};

export default DrkToggle;