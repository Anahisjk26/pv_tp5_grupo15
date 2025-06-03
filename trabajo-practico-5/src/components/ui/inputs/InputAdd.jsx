import React from "react";
import { TextField } from "@mui/material";

const Input = ({ value, onChange, required, id, label, name, ...props }) => {
  return (
    <TextField
      fullWidth
      margin="normal"
      id={id}
      name={name}
      label={label}
      value={value}
      onChange={onChange}
      required={required}
      {...props}
    />
  );
};

export default Input;
