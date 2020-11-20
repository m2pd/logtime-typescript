import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { FastField, Form, Formik } from 'formik';
import SelectField from '../../../../custom-field/SelectField';
import { ACTION_OPTIONS, getUserOptions } from '../../../../constaints';
import { Button } from '@material-ui/core';
import logtimeService from '../../../../services/logtime.service';
import './TimeSheetByTeamForm.scss';
import { parseTeam } from '../../../../utils/parseTeam';
import SelectFieldOnchange from '../../../../custom-field/SelectFieldOnchange';

interface IProps{
  onHandleChange: Function;
};

const TimeSheetByTeamForm : React.FC<IProps> = (props) => {
  const {onHandleChange} =  props;
  const initialValues = {};
  const [teamOption, setTeamOption] = useState(getUserOptions())

  const onSubmit = (values:any) => {
    console.log(values)
  }
  
  return (
    <div className="team-form">
      <Formik enableReinitialize initialValues={initialValues} onSubmit={onSubmit}>
        {(formikProps) => {
          return(
            <Form>
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
            </Form>
          )
        }}
      </Formik>

    </div>
  )
}

export default TimeSheetByTeamForm
