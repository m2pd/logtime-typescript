import { default as dayjs } from 'dayjs';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import HeaderIntro from '../../../../components/HeaderIntro';
import { Logtime, LogtimeEditPage } from '../../../../constaints/interface';
import logtimeService from '../../../../services/logtime.service';
import { UserCurrent } from '../../../Account/pages/Main';
import { MainComponent } from '../../../Main';
import AddEditForm from '../../components/AddEditForm';


interface IProps{
  currentUser: UserCurrent
  timesheetId:any;
}

const AddEditTimeSheetPage:React.FC<IProps> = props =>{
  const history = useHistory();
  const [editedTimeSheet, setEditedTimeSheet] = useState({})
  //Check param in router isAddMode
  const { timesheetId }:any = useParams();
  const isAddMode = !timesheetId;

  //type is many value: Logtime + enable, comment
  useEffect(() => {
    logtimeService.getLogtimeById(+timesheetId)
    .then(res =>{

      //Format date render to formik
      const newData = {
        ...res.data,
        date: dayjs(res.data.date).format('YYYY-MM-DD')
      }

      setEditedTimeSheet(newData)
    })
    .catch(err => console.log(err))
  }, [timesheetId])

  console.log({timesheetId,editedTimeSheet})
  const FromDateDefault:string = dayjs(new Date()).format('YYYY-MM-DD');

  const initialValues:any = isAddMode
    ? {
      activity: "",
      comment: "",
      cost: 0,
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
    } : editedTimeSheet;

  const {currentUser: {id}} =  props;

  const handleSubmit = (values:LogtimeEditPage) => {
    console.log(values)
    const data:Logtime = {
      ...values,
      userId: id,
      dateString: values.date,
    }

    logtimeService.postLogtime(data)
    .then(res => history.push('/timesheet'))
    .catch(err =>{
      toast.error("Cậu chưa nhập đầy đủ thông tin đâu 🤨", {
        position: toast.POSITION.BOTTOM_RIGHT
      });
    })
  }
  return(
    <div>
      <MainComponent>
        <HeaderIntro
          title='Thêm mới danh sách'
          intro='Trang thông tin tài khoản'
        />
        <div className="page-content">
          <AddEditForm
            onSubmit={handleSubmit}
            initialValues={initialValues}
            isAddMode={isAddMode}
          />
        </div>
      </MainComponent>
    </div>
  )
}

const mapStateToProps = (state:any) => {
  return{
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(AddEditTimeSheetPage);