import PropTypes from 'prop-types';
import React,{useState} from 'react';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

RadioTimeSheetField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

RadioTimeSheetField.defaultProps = {
  label: '',
  placeholder: '',
  disabled: false,
};

interface PropsInputField {
  field: any;
  form:any;
  type: string;
  label: string;
  size:string;
  disabled:boolean;
  variant?:string;
}

function RadioTimeSheetField(props:PropsInputField) {
  const { field, form, label, disabled } = props;
  const { name, value } = field;

  return (
    <div>
      <FormControl component="fieldset">
        <FormLabel component="legend">Hình thức</FormLabel>
        <RadioGroup row  aria-label="gender">
          <FormControlLabel value={value} control={<Radio />} label="Thông thường" checked={value === false} onChange={() => form.setFieldValue(name, false)} />
          <FormControlLabel value={value} control={<Radio />} label="Làm thêm giờ (OT)" checked={value === true} onChange={() => form.setFieldValue(name, true)} />
        </RadioGroup>
      </FormControl>
    </div>
  );
}

export default RadioTimeSheetField;
