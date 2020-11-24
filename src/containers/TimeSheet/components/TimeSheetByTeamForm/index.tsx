import Grid from '@material-ui/core/Grid';
import { FastField, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { getSelectOptions } from '../../../../constaints';
import InputFieldOnChange from '../../../../custom-field/InputFieldOnChange';
import SelectFieldOnchange from '../../../../custom-field/SelectFieldOnchange';
import './TimeSheetByTeamForm.scss';
interface IProps{
  onHandleChange: Function;
  onGetDayStart: Function;
  onGetDayEnd: Function;
  initialValues: {
    FromDate: string,
    ToDate: string,
    activity: string,
  }
};

const TimeSheetByTeamForm : React.FC<IProps> = (props) => {
  const {onHandleChange, onGetDayStart, onGetDayEnd, initialValues} =  props;
  const [teamOption] = useState(getSelectOptions('team', 'Team'))
  // console.log(getSelectOptions('team', 'Team'))

  const onSubmit = (values:any) => {
    console.log(values)
  }
  
  return (
    <div className="team-form">
      <Formik enableReinitialize initialValues={initialValues} onSubmit={onSubmit}>
        {(formikProps) => {
          return(
            <Form>
              <Grid container spacing={3}>
                <Grid item xs={6} lg={3}>
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
                <Grid item xs={6} lg={3}>
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
                <Grid item xs={12} lg={6}>
                <FastField
                    name="activity"
                    className="timesheet-item select-field"
                    component={SelectFieldOnchange}

                    label="Nhân viên"
                    placeholder='Chọn Team ???'
                    onHandleChange={onHandleChange}
                    options={teamOption}
                    required={true}
                  />
                </Grid>
              </Grid>
            </Form>
          )
        }}
      </Formik>

    </div>
  )
}

export default TimeSheetByTeamForm
