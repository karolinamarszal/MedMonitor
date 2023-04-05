import React, { useState, useRef } from "react";
import { uniqueId } from "lodash";
import classNames from "../utils/helpers"


const CustomInput = (props) => {
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
    <div className={props.className}>
      <div 
        className={classNames({
          "inputContainer inputContainerActive": isClicked,
          "inputContainer": !isClicked,
          "inputContainerFullWidth": !!props.fullWidth,
        })}
        onClick={handleClick}
        onBlur={handleBlur}
      >
        {props.icon && <i 
        className={classNames({
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
            "hidden": !props.value && !isClicked && props.type=== "date",
          })} 
        >
          {props.label}
        </label>
        <input 
          type={props.type} 
          className={classNames({
            "hidden": props.type === "file",
          })}
          id={uId} 
          value={props.value} 
          onChange={props.onChange} 
          name={props.name}
          ref={inputRef}
          onFocus={handleInputOnFocus}
        />
      </div>
    </div>
  );
};


export default CustomInput;