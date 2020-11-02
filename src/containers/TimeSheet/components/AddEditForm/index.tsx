import { Button, Grid } from '@material-ui/core'
import { FastField, Form, Formik } from 'formik'
import { connect } from 'react-redux';

import React from 'react'
import SelectField from '../../../../custom-field/SelectField';
import InputField from '../../../../custom-field/InputFiled';
import { parseListUsers } from '../../../../utils/parseListUsers';
import { UserCurrent } from '../../../Account/pages/Main';
import RadioTimeSheetField from '../../../../custom-field/RadioTimeSheetField';
import { default as dayjs } from 'dayjs'
import { ACTION_OPTIONS } from '../../../../constaints';
import './AddEditForm.scss';

interface IProps{
  onSubmit: Function;
}

interface initialValues{
  dateString: string;
  overtime: boolean;
  cost: number;
  title: string;
  description: string;
  projectTitle: string;
  activity: string;
}

const AddEditForm:React.FC<IProps> = props =>{
  const FromDateDefault:string = dayjs(new Date()).format('YYYY-MM-DD');
  
  const initialValues:initialValues = {
    dateString: FromDateDefault,
    overtime: false,
    cost: 0,
    title: '',
    description: '',
    projectTitle: '',
    activity: '1'
  }

  const { onSubmit}:{onSubmit: any} = props;

  return(
    <div className="timehseet-form">
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {(formikProps) =>{
          // do something here ...
          // const { values, errors, touched, isSubmitting } = formikProps;
          const { values, errors, touched, isSubmitting } = formikProps;

          return(
            <Form className='page-form account-page-form'>
              <Grid container justify="center" spacing={3}>
                <Grid item spacing={3} xs={8}>
                  <FastField
                    name="dateString"
                    label="Thời gian"
                    type="date"
                    component={InputField}
                    size="small"
                  />
                </Grid>

                <Grid item spacing={3} xs={8}>
                  <FastField
                      name="cost"
                      label="Số giờ"
                      type="number"
                      min={0}
                      component={InputField}
                      size="small"
                  />
                </Grid>

                <Grid item spacing={3} xs={8}>
                  <FastField
                      name="title"
                      label="Công việc"
                      type="text"
                      component={InputField}
                      size="small"
                  />
                </Grid>

                <Grid item spacing={3} xs={8}>
                  <FastField
                      name="projectTitle"
                      label="Dự án"
                      type="text"
                      component={InputField}
                      size="small"
                  />
                </Grid>

                <Grid item spacing={3} xs={8}>
                  <FastField
                      name="description"
                      label="Mô tả"
                      type="text"
                      component={InputField}
                      size="small"
                  />
                </Grid>

                <Grid item spacing={3} xs={8}>
                  <FastField
                      name="overtime"
                      label="Hình thức"
                      component={RadioTimeSheetField}
                      size="small"
                  />
                </Grid>
                
                <Grid item spacing={3} xs={8}>
                  <FastField
                    name="activity"
                    className="timesheet-item select-field"
                    component={SelectField}

                    label="Nhân viên"
                    placeholder='Chọn hoạt động ???'
                    options={ACTION_OPTIONS}
                  />
                </Grid>

                <Grid item spacing={3} xs={8}>
                  <Button type='submit' variant='outlined' color='primary'>
                    Thêm mới
                  </Button>
                </Grid>
              
              </Grid>
          </Form>
          )
        }}
      </Formik>
    </div>
  )
}

const mapStateToProps = (state:any) => {
  return{
    users: state.users
  }
}

export default connect(mapStateToProps)(AddEditForm);