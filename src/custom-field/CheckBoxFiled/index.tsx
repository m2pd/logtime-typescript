import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React, { useEffect } from 'react';

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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    formControl: {
      margin: theme.spacing(3),
    },
  }),
);

function CheckBoxField(props: PropsInputField) {
  const { field, form, type, label,size,disabled,variant, min, required }: any = props;
  const { name, value }: any = field;
  //field have name, vale, onChange, onBlur



  const classes = useStyles();
  const [state, setState] = React.useState({
    admin: false,
    leader: false,
    common: true,
  });

  const listRoles:string[] = [];
  const newValue:any = {...state};

  for(let item in newValue){
    let val = item
    if(newValue[val]){
      listRoles.push(val)
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  useEffect(() => {
    const changeEvent = listRoles.length > 0 ? listRoles : ['Common'] ;
    form.setFieldValue(name, changeEvent)
  }, [state])

  
  // console.log({state})



  const { admin, leader, common } = state;
  const error = [admin, leader, common].filter((v) => v).length !== 2;


  return (
    <FormControl component="fieldset" className={classes.formControl}>
      <FormLabel component="legend">Vai trò</FormLabel>
      <FormGroup row={true}>
        <FormControlLabel
          control={<Checkbox checked={admin} value={false} onChange={handleChange} name="admin" />}
          label="Admin"
        />
        <FormControlLabel
          control={<Checkbox checked={leader} value={false} onChange={handleChange} name="leader" />}
          label="Leader"
        />
        <FormControlLabel
          control={<Checkbox checked={common} value={true} onChange={handleChange} name="common" />}
          label="Common"
        />
      </FormGroup>
    </FormControl>
  );
}

CheckBoxField.defaultProps = {
  variant:"outlined",
  required: false,
  disabled: false,
}

export default CheckBoxField;
