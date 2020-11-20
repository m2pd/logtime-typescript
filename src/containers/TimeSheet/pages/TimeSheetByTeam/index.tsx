import React, { useState } from 'react';
import HeaderIntro from '../../../../components/HeaderIntro';
import logtimeService from '../../../../services/logtime.service';
import { MainComponent } from '../../../Main';
import CardTeam from '../../components/CardTeam';
import TimeSheetByTeamForm from '../../components/TimeSheetByTeamForm';

interface IProps {}

const TimeSheetByTeam:React.FC<IProps> = (props) => {
  const [data, setData] = useState([])

  const onHandleChange = (values:any) => {
    logtimeService.getLogtimeByTeam(values, '2020-10-10', '2020-11-11')
    .then(res => setData(res.data))
  }
  
  console.log(data)
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
