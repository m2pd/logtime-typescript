import React, { useState, useEffect } from 'react';
import HeaderIntro from '../../../../components/HeaderIntro';
import logtimeService from '../../../../services/logtime.service';
import { MainComponent } from '../../../Main';
import CardTeam from '../../components/CardTeam';
import TimeSheetByTeamForm from '../../components/TimeSheetByTeamForm';
import { default as dayjs } from 'dayjs'


interface IProps {}

const TimeSheetByTeam:React.FC<IProps> = (props) => {
  const [data, setData] = useState([])

  const [values, setValues]:any = useState('1');
  const FromDateDefault:string = dayjs().day(1).format('YYYY-MM-DD');
  const ToDateDefault:string = dayjs().day(6).format('YYYY-MM-DD');

  const [fromDay, setFromDay] = useState(FromDateDefault)
  const [toDay, setToDay] = useState(ToDateDefault) 

  const initialValues = {
    FromDate: FromDateDefault,
    ToDate: ToDateDefault,
    activity: values,
  }

  const onHandleChange = (values:any) => {
    setValues(values)
  }

  const onGetDayStart = (values:any) => {
    setFromDay(values)
  }

  const onGetDayEnd = (values:any) => {
    setToDay(values)
  }

  useEffect(() => {
    logtimeService.getLogtimeByTeam(values, fromDay, toDay)
    .then(res => setData(res.data))
  }, [values, fromDay, toDay])
  
  return(
    <div>
      <MainComponent>
        <HeaderIntro
          title='from Team with love ❤️'
          intro='Trang thông tin các nhóm'
        />
        <div className="page-content">
          <h1>Hello team</h1>
          <TimeSheetByTeamForm
           onHandleChange={onHandleChange}
           onGetDayStart={onGetDayStart}
           onGetDayEnd={onGetDayEnd}
           initialValues={initialValues}
          />
          <CardTeam
            data={data}
          />

          {/* <TimeSheetList
            data={logtime}
            userRoles={userRoles}
            onTimeSheetEditClick={handleTimeSheetEditClick}
            onTimeSheetRemoveClick={handleTimeSheetRemoveClick}
            onTimeSheetViewDetailsClick={handleTimeSheetViewDetailsClick}
          /> */}
        </div>
      </MainComponent>
    </div>
  )
}

export default TimeSheetByTeam;
