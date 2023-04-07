import React, { useState, useRef } from "react";
import { uniqueId } from "lodash";
import classNames from "../utils/helpers"


const CustomInput = ({className, icon, fullWidth, value, type, label, onChange, name}) => {
  
  const uId = uniqueId();

  const [isClicked, setIsClicked] = useState(false);
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
    inputRef.current.showPicker();
  }
  
  const handleBlur = () => {
    setIsClicked(false)
  }
  
  const handleInputOnFocus = () => {
    setIsClicked(true);
    inputRef.current.showPicker();
  }


  return (
    <div className={className}>
      <div 
        className={classNames({
          "inputContainer inputContainerActive": isClicked,
          "inputContainer": !isClicked,
          "inputContainerFullWidth": !!fullWidth,
        })}
        onClick={handleClick}
        onBlur={handleBlur}
      >
        {icon && <i 
        className={classNames({
          "iconForm": !isClicked,
          "iconFormActive iconForm": isClicked,
        })}
        >
          {icon}
        </i>}
        <label 
          htmlFor={uId}
          className={classNames({
            "labelBlurredWithValue": !!value && !isClicked,
            "labelActive": isClicked,
            "label": !isClicked,
            "hidden": !value && !isClicked && type=== "date",
          })} 
        >
          {label}
        </label>
        <input 
          type={type} 
          className={classNames({
            "hidden": type === "file",
          })}
          id={uId} 
          value={value} 
          onChange={onChange} 
          name={name}
          ref={inputRef}
          onFocus={handleInputOnFocus}
        />
      </div>
    </div>
  );
};


export default CustomInput;