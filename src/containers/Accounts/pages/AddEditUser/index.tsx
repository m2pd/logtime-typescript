import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import swal from 'sweetalert';
import HeaderIntro from '../../../../components/HeaderIntro';
import { UserRegister } from '../../../../constaints/interface';
import authHeader from '../../../../services/auth-header';
import AuthService from '../../../../services/auth.service';
import userService from '../../../../services/user.service';
import { MainComponent } from '../../../Main';
import AccountListForm from '../../components/AccountListForm';

interface IProps{
  accountId: any
}

const AddEditAccountPage:React.FC<IProps> = props =>{
  const history = useHistory();
  const { accountId }:any = useParams();
  const isAddMode = !accountId;
  const [editedAccount, setEditedAccount] = useState({})

  useEffect(() => {

    userService.getUserId(+accountId)
    .then(res => {
      const data = {
        ...res.data,
        roles: res.data.userRoles
      }
      setEditedAccount(data)
    })

    // userService.getUserId(+accountId)
    // .then(res => console.log(res))
    // axios.get('http://logtime.mitechcenter.vn/api/Logtime/byTeam',{
    //   params:{
    //     Team:1,
    //     FromDate:'2020-10-10',
    //     ToDate:'2020-11-11',
    //   },

    //   headers: authHeader()
    // })
  }, [])

  const initialValues = isAddMode ?  {
    fullName: '',
    userName: '',
    email: '',
    phoneNumber: '',
    team: '',
    roles : ['Common'],
    active: true,
  } : editedAccount;

  console.log({initialValues})
  
  const handelSubmit = (values:any) => {
    console.log(values)
    if(isAddMode){
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
    } else {
      userService.updateUser(+accountId, values)
      .then(res => {
        swal("Yeahhh!", "Cập nhật thành công rồi nha 😍", "success");
        history.push('/accounts')
        console.log(res)
      })
      .catch(err =>{
        toast.error("Cậu chưa nhập đầy đủ thông tin đâu 🤨", {
          position: toast.POSITION.BOTTOM_RIGHT
        });
      })
    }
  }

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
                initialValues={initialValues}
                isAddMode={isAddMode}
              />
          </div>
      </MainComponent>
    </div>
  )
}

export default AddEditAccountPage;