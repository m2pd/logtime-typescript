import { TextField } from '@material-ui/core';
import React from 'react';

interface PropsInputFieldOnChange {
  field: any;
  type: string;
  label: string;
  size:string;
  disabled:boolean;
  required:boolean;
  variant?:string;
  fullWidth?:boolean;
}

function InputFieldOnChange(props: PropsInputFieldOnChange) {
  const { field, type, label,size,disabled,variant, fullWidth,required }: any = props;
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
      fullWidth={fullWidth}
      disabled={disabled} 
      required={required} 
    />
  );
}

InputFieldOnChange.defaultProps = {
  variant:"outlined"
}

export default InputFieldOnChange;
