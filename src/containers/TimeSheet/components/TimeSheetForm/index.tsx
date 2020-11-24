import { FastField, Form, Formik } from 'formik';
import React from 'react';
import { connect } from 'react-redux';
// import { getSelectOptions } from '../../../../constaints';
import InputFieldOnChange from '../../../../custom-field/InputFieldOnChange';
import SelectFieldOnchange from '../../../../custom-field/SelectFieldOnchange';
import { parseListUsers } from '../../../../utils/parseListUsers';
import { UserCurrent } from '../../../Account/pages/Main';
import './TimeSheetForm.scss';
import Grid from '@material-ui/core/Grid';

interface IProps{
  onHandleChange: Function;
  onGetDayStart: Function;
  onGetDayEnd: Function;
  FromDate: string;
  ToDate: string;
  onSubmit: any;
  id: number;
  userRoles: string[];
}

interface initialValues{
  FromDate:string,
  ToDate:string,
  id:number;
}


const TimeSheetForm:React.FC<IProps> = props =>{
  const {FromDate, ToDate, id, onSubmit, userRoles, onGetDayStart, onGetDayEnd, onHandleChange }:IProps = props;
  // const {users}:any = props;
  const isAdmin = userRoles.includes('Leader');
  
  let listUser:UserCurrent[] = [];
  if(isAdmin){
    listUser = JSON.parse(localStorage.getItem('users') || '[]') ;
  }
  
  const initialValues:initialValues ={
    FromDate: FromDate,
    ToDate: ToDate,
    id:id,
  }

  return(
    <div className={`${userRoles.includes('Leader') ? 'admin' : '' } timesheet-form`} >
      <Formik enableReinitialize initialValues={initialValues} onSubmit={onSubmit} >
        {(formikProps) => {
          //Default formikProps have : values, errors, touched, isSubmitting

          return(
            <Form>
              <Grid container spacing={3}>
                <Grid item xs={6} lg={userRoles.includes('Leader') ? 3 : 6 }>
                  <FastField
                    className="timesheet-item"
                    name="FromDate"
                    label="Từ ngày"
                    type="date"
                    onGetDay={onGetDayStart}
                    component={InputFieldOnChange}
                    size="small"
                  />
                </Grid>

                <Grid item xs={6} lg={userRoles.includes('Leader') ? 3 : 6 }>
                  <FastField
                    className="timesheet-item"
                    name="ToDate"
                    label="Đến ngày"
                    type="date"
                    onGetDay={onGetDayEnd}
                    component={InputFieldOnChange}
                    size="small"
                  />
                </Grid>

                {
                  userRoles.includes('Leader') && userRoles.includes('Admin')
                  &&  
                  <Grid item xs={12} lg={6}>
                    <FastField
                      name="id"
                      className="timesheet-item select-field"
                      component={SelectFieldOnchange}
                      
                      onHandleChange={onHandleChange}
                      label="Nhân viên"
                      placeholder='Chọn nhân viên ???'
                      options={parseListUsers(listUser)}
                    />
                  </Grid>
                }   
              </Grid>

              
{/* 
              <Button type='submit' variant='outlined' color='primary'>
                Cập nhật
              </Button> */}
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

export default connect(mapStateToProps)(TimeSheetForm);