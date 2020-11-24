import { Button, Grid } from '@material-ui/core';
import { default as dayjs } from 'dayjs';
import { FastField, Form, Formik } from 'formik';
import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ACTION_OPTIONS } from '../../../../constaints';
import { LogtimeEditPage } from '../../../../constaints/interface';
import InputField from '../../../../custom-field/InputFiled';
import InputNumberFiled from '../../../../custom-field/InputNumberFiled';
import RadioTimeSheetField from '../../../../custom-field/RadioTimeSheetField';
import SelectField from '../../../../custom-field/SelectField';
import './AddEditForm.scss';
interface IProps{
  onSubmit: Function;
  initialValues: LogtimeEditPage;
  isAddMode: boolean;
  userRoles: string[],
}

const AddEditForm:React.FC<IProps> = props =>{  
  const { onSubmit, initialValues, isAddMode, userRoles}:{onSubmit: any, initialValues:LogtimeEditPage, isAddMode: boolean, userRoles: string[]} = props;
  const FromDateDefault:string = dayjs(new Date()).format('YYYY-MM-DD');
  const history = useHistory();
  const isAdmin = userRoles.includes('Leader') && userRoles.includes('Admin') 
  const enableTextFiled = isAdmin ? true : initialValues.enable;

  const [initValues, setInitValues] = useState({
    activity: "",
    comment: "",
    cost: 20,
    date: FromDateDefault,
    description: "",
    enable: true,
    id: 0,
    overtime: false,
    projectTitle: "",
    title: "",
    createdAt: FromDateDefault,
    updatedAt: FromDateDefault,
    userId: 0,
  })

  useEffect(() => {
    setInitValues(initialValues)
  }, [initialValues])

  // console.log(initialValues)
  // console.log(enableTextFiled)
  return(
    <div className="timehseet-form">
      <Formik enableReinitialize initialValues={initValues} onSubmit={onSubmit}>
        {(formikProps) =>{
          // do something here ...
          // const { values, errors, touched, isSubmitting } = formikProps;
          // const { values, errors, touched, isSubmitting } = formikProps;

          return(
            <Form className='page-form account-page-form'>
              <Grid container justify="center">
                <Grid item xs={12} lg={8}>
                  <FastField
                    name="date"
                    label="Thời gian"
                    type="date"
                    component={InputField}
                    size="medium"
                    required={true}
                    disabled={!enableTextFiled}
                  />
                </Grid>

                <Grid item xs={12} lg={8}>
                  <FastField
                      name="cost"
                      label="Số giờ"
                      type="number"
                      component={InputNumberFiled}
                      size="medium"
                      required={true}
                      disabled={!enableTextFiled}
                  />
                </Grid>

                <Grid item xs={12} lg={8}>
                  <FastField
                      name="title"
                      label="Công việc"
                      type="text"
                      component={InputField}
                      size="medium"
                      required={true}
                      disabled={!enableTextFiled}
                  />
                </Grid>

                <Grid item xs={12} lg={8}>
                  <FastField
                      name="projectTitle"
                      label="Dự án"
                      type="text"
                      component={InputField}
                      size="medium"
                      required={true}
                      disabled={!enableTextFiled}
                  />
                </Grid>

                <Grid item xs={12} lg={8}>
                  <FastField
                      name="description"
                      label="Mô tả"
                      type="text"
                      component={InputField}
                      size="medium"
                      disabled={!enableTextFiled}
                  />
                </Grid>

                <Grid item xs={12} lg={8}>
                  <FastField
                      className="overtime"
                      name="overtime"
                      label="Hình thức"
                      component={RadioTimeSheetField}
                      size="medium"
                      required={true}
                      disabled={!enableTextFiled}
                  />
                </Grid>
                
                <Grid item xs={12} lg={8}>
                  <FastField
                    name="activity"
                    className="timesheet-item select-field"
                    component={SelectField}

                    label="Nhân viên"
                    placeholder='Chọn hoạt động ???'
                    options={ACTION_OPTIONS}
                    required={true}
                    disabled={!enableTextFiled}
                  />
                </Grid>
                {/* Show block TextFiled */}
                {!enableTextFiled &&
                  <Grid item xs={12} lg={8}>
                    <FastField
                        name="comment"
                        label="Bình luận"
                        type="text"
                        component={InputField}
                        size="medium"
                        disabled={!enableTextFiled}
                    />
                  </Grid>                
                }
                {/* Layout show only admin */}
                {
                  isAdmin
                  // checkRoles('Admin' || 'Leader')
                  && (
                      <Fragment>
                        <Grid item xs={12} lg={8}>
                          <FastField
                              name="enable"
                              label="Khóa Logtime"
                              labelChild1="Đóng"
                              labelChild2="Mở"
                              component={RadioTimeSheetField}
                              size="medium"
                              required={true}
                          />
                        </Grid>
                        <Grid item xs={12} lg={8}>
                          <FastField
                              name="comment"
                              label="Bình luận"
                              type="text"
                              component={InputField}
                              size="medium"
                              disabled={!enableTextFiled}
                          />
                        </Grid>  
                      </Fragment>
                    )
                }

                <Grid item xs={12} lg={8}>
                  {enableTextFiled && 
                    <Button className="btn btn-timesheet" type='submit' variant='contained' color='primary'>
                      {isAddMode ? 'Thêm mới' : 'Cập nhật'}
                    </Button>
                  }

                  <Button variant='outlined' color='primary' onClick={() => history.push('/timesheet')}>
                    Về trang danh sách
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
    users: state.users,
  }
}

export default connect(mapStateToProps)(AddEditForm);