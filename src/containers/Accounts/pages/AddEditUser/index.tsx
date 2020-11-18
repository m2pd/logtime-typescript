import axios from 'axios';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import swal from 'sweetalert';
import HeaderIntro from '../../../../components/HeaderIntro';
import { UserRegister } from '../../../../constaints/interface';
import authHeader from '../../../../services/auth-header';
import AuthService from '../../../../services/auth.service';
import { MainComponent } from '../../../Main';
import AccountListForm from '../../components/AccountListForm';

interface IProps{}

const AddEditAccountPage:React.FC<IProps> = props =>{
  const history = useHistory();
  
  const handelSubmit = (values:UserRegister) => {
    console.log(values)
    AuthService.register(values)
    .then(res => {
      swal("Yeahhh!", "Đã thêm mới tài khoản thành công 😊", "success");
      history.push('/accounts')
    })
    .catch(err =>{
      toast.error("Cậu chưa nhập đầy đủ thông tin đâu 🤨", {
        position: toast.POSITION.BOTTOM_RIGHT
      });
    })
  }


  useEffect(() => {
    axios.get('http://logtime.mitechcenter.vn/api/Logtime/byTeam',{
      params:{
        Team:1,
        FromDate:'2020-10-10',
        ToDate:'2020-11-11',
      },

      headers: authHeader()
    })
  }, [])

  return(
    <div className="account-list-page">
      <MainComponent>
          <HeaderIntro
            title='Trang quản trị'
            intro='Chào mừng các bạn đến với MITECH WORKPLACE'
            isButtonAdd={false}
          />
          <div className="page-content">
              <AccountListForm
                onSubmit= {handelSubmit}
              />
          </div>
      </MainComponent>
    </div>
  )
}

export default AddEditAccountPage;