import React from 'react';
import HeaderIntro from '../../../../components/HeaderIntro';
import { Logtime, LogtimeForm } from '../../../../constaints/interface';
import { MainComponent } from '../../../Main';
import AddEditForm from '../../components/AddEditForm';
import logtimeService from '../../../../services/logtime.service';
import parseActionLogtime from '../../../../utils/parseActionLogtime';
import {connect} from 'react-redux'
import { UserCurrent } from '../../../Account/pages/Main';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';

interface IProps{
  currentUser: UserCurrent
}

const AddEditTimeSheetPage:React.FC<IProps> = props =>{
  const history = useHistory();

  const {currentUser: {id}} =  props;

  const handleSubmit = (values:LogtimeForm) => {
    const data:Logtime = {
      ...values,
      userId: id
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