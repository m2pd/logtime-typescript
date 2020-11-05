import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import PropTypes from 'prop-types';
import React from 'react';


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
  disabled?:boolean;
  variant?:string;
}

function RadioTimeSheetField(props:PropsInputField) {
  const { field, form, label, disabled } = props;
  const { name, value } = field;

  return (
    <div>
      <FormControl component="fieldset" disabled={disabled}>
        <FormLabel component="legend">{label} *</FormLabel>
        <RadioGroup row  aria-label="gender">
          <FormControlLabel value={value} control={<Radio />} label="Thông thường" checked={value === false} onChange={() => form.setFieldValue(name, false)} />
          <FormControlLabel value={value} control={<Radio />} label="Làm thêm giờ (OT)" checked={value === true} onChange={() => form.setFieldValue(name, true)} />
        </RadioGroup>
      </FormControl>
    </div>
  );
}

export default RadioTimeSheetField;
