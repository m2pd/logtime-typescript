import { TextField } from '@material-ui/core';
import React from 'react';

interface PropsInputField {
  field: any;
  type: string;
  label: string;
  size:string;
  disabled?:boolean;
  min?:string;
  variant?:string;
  required:boolean;
}
function InputField(props: PropsInputField) {
  const { field, type, label,size,disabled,variant, min, required }: any = props;
  const { name }: any = field;
  //field have name, vale, onChange, onBlur
  return (
    <TextField
      id={name}
      label={label}
      {...field}
      name={name}
      type={type}
      size={size}
      variant={variant}
      className='field'
      min={min}
      fullWidth
      disabled={disabled} 
      required={required}
    />
  );
}

InputField.defaultProps = {
  variant:"outlined",
  required: false,
  disabled: false,
}

export default InputField;
