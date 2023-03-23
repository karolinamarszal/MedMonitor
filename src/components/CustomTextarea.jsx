import React, { useState, useRef } from "react";
import { uniqueId } from "lodash";
import classNames from "../utils/helpers"


const CustomInput = (props) => {
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
      {props.icon && <i className={classNames({
        "iconForm": !isClicked,
        "iconFormActive iconForm": isClicked,
      })}
      >
        {props.icon}
      </i>}
      <label 
        htmlFor={uId}
        className={classNames({
          "labelBlurredWithValue": !!props.value && !isClicked,
          "labelActive": isClicked,
          "label": !isClicked,
        })} 
      >
        {props.label}
      </label>
      <textarea 
        id={uId} 
        value={props.value} 
        onChange={props.onChange} 
        name={props.name}
        ref={inputRef}
        onFocus={()=> setIsClicked(true)}
      />
    </div>
  );
};


export default CustomInput;