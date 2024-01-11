import React, { useState } from "react";
import { WrapperInputStyle } from "./style";

const InputForm = (props) => {
  const [valueInput, setValueInput] = useState("");
  const { placeholder = "Nhập text", ...rest } = props || {}; // Handle undefined props

  const handleOnChange = (e) => {
    console.log(e.target.value);
    setValueInput(e.target.value);
  };

  return (
    <>
      <WrapperInputStyle
        placeholder={placeholder}
        value={valueInput}
        {...rest}
        onChange={handleOnChange}
      ></WrapperInputStyle>
    </>
  );
};

export default InputForm;
