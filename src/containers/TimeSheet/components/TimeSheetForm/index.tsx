import { FastField, Form, Formik } from 'formik';
import React from 'react';
import { connect } from 'react-redux';
// import { getSelectOptions } from '../../../../constaints';
import InputFieldOnChange from '../../../../custom-field/InputFieldOnChange';
import SelectFieldOnchange from '../../../../custom-field/SelectFieldOnchange';
import { parseListUsers } from '../../../../utils/parseListUsers';
import { UserCurrent } from '../../../Account/pages/Main';
import './TimeSheetForm.scss';

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
  const listUser:UserCurrent[]  = JSON.parse(localStorage.getItem('users') || '[]') ;
  
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
              <FastField
                className="timesheet-item"
                name="FromDate"
                label="Từ ngày"
                type="date"
                onGetDay={onGetDayStart}
                component={InputFieldOnChange}
                size="small"
              />

              <FastField
                className="timesheet-item"
                name="ToDate"
                label="Đến ngày"
                type="date"
                onGetDay={onGetDayEnd}
                component={InputFieldOnChange}
                size="small"
              />

              {
                userRoles.includes('Leader') && userRoles.includes('Admin')
                &&  <FastField
                  name="id"
                  className="timesheet-item select-field"
                  component={SelectFieldOnchange}
                  
                  onHandleChange={onHandleChange}
                  label="Nhân viên"
                  placeholder='Chọn nhân viên ???'
                  options={parseListUsers(listUser)}
                />
              }   
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