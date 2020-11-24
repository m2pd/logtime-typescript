import React, { useState, useEffect, useCallback } from 'react';
import HeaderIntro from '../../../../components/HeaderIntro';
import logtimeService from '../../../../services/logtime.service';
import { MainComponent } from '../../../Main';
import CardTeam from '../../components/CardTeam';
import TimeSheetByTeamForm from '../../components/TimeSheetByTeamForm';
import { default as dayjs } from 'dayjs'
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert'



interface IProps {}

const TimeSheetByTeam:React.FC<IProps> = (props) => {
  const [data, setData] = useState([])
  const history = useHistory();

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

  const handleTimeSheetEditClick = (sheet:any) =>{
    console.log("Edit:",sheet)
    const editSheetUrl = `/timesheet/${sheet[0]}` 
    history.push(editSheetUrl)
  }

  const handleTimeSheetRemoveClick = (sheet:any) =>{
    // sheet: [3609, "2020-10-31T00:00:00", 4, "Tìm hiểu Custom hook trong ReactJS", "Nghiên cứu", "Tìm hiểu Custom hook trong ReactJS", false, "5", undefined]
    swal({
        title: "Có chắc là muốn xóa không?",
        text: "Chắc rồi thì nhấn OK đi",
        icon: "warning",
        buttons:  ["Thôi, không xóa nữa đâu!", "OK nè !"],
        dangerMode: true,
    })
    .then((willUpdate) => {
        if (willUpdate) {
            logtimeService.deleteLogtimeById(sheet[0])
            .then(res => {
                //re-render after remove logtime
                getLogtimeByTeam();
            })
            .catch(err => console.log(err))
            
            swal("Cập nhật thành công", {
                icon: "success",
            });
        } else {
            swal("Suy nghĩ kĩ rồi mới sữa nghen <3");
        }
    });
  }

  const getLogtimeByTeam = useCallback(
    () => {
      logtimeService.getLogtimeByTeam(values, fromDay, toDay)
      .then(res => setData(res.data))
    },       
    [values,fromDay,toDay]
)

  useEffect(() => {
    getLogtimeByTeam();
  }, [values, fromDay, toDay, getLogtimeByTeam])
  
  return(
    <div>
      <MainComponent>
        <HeaderIntro
          title='from Team with love ❤️'
          intro='Trang thông tin các nhóm'
        />
        <div className="page-content">
          <TimeSheetByTeamForm
           onHandleChange={onHandleChange}
           onGetDayStart={onGetDayStart}
           onGetDayEnd={onGetDayEnd}
           initialValues={initialValues}
          />
          <CardTeam
            data={data}
            onTimeSheetEditClick={handleTimeSheetEditClick}
            onTimeSheetRemoveClick={handleTimeSheetRemoveClick}
            // onTimeSheetViewDetailsClick={handleTimeSheetViewDetailsClick}
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
