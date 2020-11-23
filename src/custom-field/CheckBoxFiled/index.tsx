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
  const { field, form }: any = props;
  const { name, value }: any = field;
  //field have name, vale, onChange, onBlur

  const classes = useStyles();
  const [state, setState] = React.useState({
    Admin: false,
    Leader: false,
    Common: true,
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

  const { Admin, Leader, Common } = state;
  // const error = [admin, leader, common].filter((v) => v).length !== 2;

  return (
    <FormControl component="fieldset" className={classes.formControl}>
      <FormLabel component="legend">Vai trò</FormLabel>
      <FormGroup row={true}>
        <FormControlLabel
          control={<Checkbox checked={Admin} value={Admin} onChange={handleChange} name="Admin" />}
          label="Admin"
        />
        <FormControlLabel
          control={<Checkbox checked={Leader} value={Leader} onChange={handleChange} name="Leader" />}
          label="Leader"
        />
        <FormControlLabel
          control={<Checkbox checked={Common} value={Common} onChange={handleChange} name="Common" />}
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
