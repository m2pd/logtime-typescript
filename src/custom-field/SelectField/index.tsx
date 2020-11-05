import React from 'react';
import Select from 'react-select';

interface IProps{
  field: any;
  type: string;
  label: string;
  size:string;
  disabled:boolean;
  options: string[];
  placeholder:string;
}

function SelectField(props:IProps){
  const { field, options, label, placeholder, disabled } = props;
  const { name, value } = field;
  const selectedOption = options.find((option:any) => option.value === value);

  const handleSelectedOptionChange = (selectedOption:any) => {
    console.log(selectedOption)
    console.log(value)
    const selectedValue = selectedOption ? selectedOption.value : selectedOption;

    const changeEvent = {
      target: {
        name: name,
        value: selectedValue
      }
    };
    field.onChange(changeEvent);
  }
  return(
    <Select
      id={name}
      {...field}
      value={selectedOption}
      onChange={handleSelectedOptionChange}

      label={label}
      placeholder={placeholder}
      isDisabled={disabled}
      options={options}
    />
  )
}

export default SelectField;