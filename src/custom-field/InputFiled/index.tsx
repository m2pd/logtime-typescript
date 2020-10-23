import { TextField } from '@material-ui/core';
import React from 'react';

interface PropsInputField {
  field: any;
  type: string;
  label: string;
  size:string;
}
function InputField(props: PropsInputField) {
  const { field, type, label,size }: any = props;
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
      variant='outlined'
      className='field'
      fullWidth 
    />
  );
}

export default InputField;
