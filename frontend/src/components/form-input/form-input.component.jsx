import React from "react";
import { TextInput } from "./form-input.style";

const FormInput = ({ handleChange, ...otherProps }) => {
  return <TextInput onChange={handleChange} {...otherProps} />;
};

export default FormInput;
