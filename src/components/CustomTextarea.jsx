import React, { useState, useRef } from "react";
import { uniqueId } from "lodash";
import classNames from "../utils/helpers"


const CustomInput = ({icon, value, label, onChange, name}) => {
  const uId = uniqueId();

  const [isClicked, setIsClicked] = useState(false);
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  }

  const handleBlur = () => {
    setIsClicked(false)
  }

  return (
    <div 
      className={`${isClicked ? "inputContainer mb-400 inputContainerActive" : "inputContainer mb-400"}`} 
      onClick={handleClick}
      onBlur={handleBlur}
    >
      {icon && <i className={classNames({
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
        })} 
      >
        {label}
      </label>
      <textarea 
        id={uId} 
        value={value} 
        onChange={onChange} 
        name={name}
        ref={inputRef}
        onFocus={()=> setIsClicked(true)}
      />
    </div>
  );
};


export default CustomInput;