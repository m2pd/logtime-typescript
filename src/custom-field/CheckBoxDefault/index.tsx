import React from "react";

interface PropsInputField {
  field: any;
  form: any;
  type: any;
  value: any;
  name: any;
  label: string;
  disabled?:boolean;
  required?:boolean;
}

function CheckBoxDefaultField(props:PropsInputField) {
  // const { field, form, label, type, disabled } = props;
  // const { name, value } = field;

  return (
        <label>
          <input
            {...props}
            checked={props.field.value.includes(props.value)}
            onChange={() => {
              if (props.field.value.includes(props.value)) {
                const nextValue = props.field.value.filter(
                  (value:any) => value !== props.value
                );
                props.form.setFieldValue(props.name, nextValue);
              } else {
                const nextValue = props.field.value.concat(props.value);
                props.form.setFieldValue(props.name, nextValue);
              }
            }}
          />
          {props.value}
        </label>
  );
}

export default CheckBoxDefaultField;