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
  onGetDay: Function;
}

function InputFieldOnChange(props: PropsInputFieldOnChange) {
  const { field, type, label,size,disabled,variant, fullWidth,required, onGetDay }: any = props;
  const { name, value }: any = field;
  //field have name, vale, onChange, onBlur
  return (
    <TextField
      id={name}
      label={label}
      onChange={onGetDay(value)}
      {...field}
      name={name}
      type={type}
      size={size}
      variant={variant}
      className='field'
      fullWidth={fullWidth}
      disabled={disabled} 
      required={required} 
      // InputProps={{inputProps: { min: value} }}
    />
  );
}

InputFieldOnChange.defaultProps = {
  variant:"outlined"
}

export default InputFieldOnChange;
