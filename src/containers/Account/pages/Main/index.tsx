import React, { useEffect, useState } from 'react';
import { AnyIfEmpty, connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import HeaderIntro from '../../../../components/HeaderIntro';
import { logout } from '../../../../redux/actions/authAction';
import { getUser, updateUser } from '../../../../redux/actions/userAction';
import { MainComponent } from '../../../Main';
import AccountForm from '../../components/AccountForm';

export interface UserCurrent{
  fullName:string;
  email:string;
  phoneNumber:string;
  team:string;
  userName:string;
  userRoles:string[];
}

export interface InitialValues{
  username: string;
  email: string;
  phoneNumber:string;
  fullName:string;
  password:string;
}

interface IProps{
  user: any;
  currentUser:UserCurrent;
  history: {
    push(url: string): void;
  };
  dispatch: any ;
  getUser: Function;
  logout: Function;
  updateUser:Function;

}



function MainAccountPage(props: IProps) {
  const {user, currentUser,history} = props;

  const infoUser = JSON.parse(localStorage.getItem('currentUser') || "{}");
  console.log(infoUser)
  const idUser = +infoUser.id
  console.log(idUser)

  const [id, setId] = useState(idUser)
  const [userCurrent, setUserCurrent] = useState<UserCurrent>({
    email:"",
    fullName:"",
    phoneNumber:"",
    userName:"",
    team:"",
    userRoles:[]
  })

  useEffect(() => {
    console.log("START")
    props.getUser(id)
    .then(() => {
      setUserCurrent(currentUser);
    })
  }, [id])

  // if(!user){
  //   return <Redirect to="/login" />;
  // }

  const onLogout = () =>{
    props.logout();
  }

  const onEdit = (values:any):void  =>{
    const data = Object.assign({},infoUser,{
      fullName: values.fullName,
      phoneNumber: values.phoneNumber,
      password:values.password,
      roles:values.userRoles
    })

    props.updateUser(idUser, data)
    .then(() => {
      history.push('/dashboard');
      toast.success("Câp nhật thành công !", {
        position: toast.POSITION.TOP_LEFT
      });
      // window.location.reload();
    })
    .catch(() =>{
      toast.error("Câp nhật không thành công !", {
        position: toast.POSITION.TOP_LEFT
      });
    })

    console.log(data)
    
  }


  console.log("END")
  console.log(userCurrent)


  return (
    <div >
      <MainComponent>
          <HeaderIntro
            title='Tài khoản'
            intro='Trang thông tin tài khoản'
          />
          <div className="page-content">
              
            <AccountForm
              initialValues={props.currentUser}
              onSubmit={onEdit}
            />
            {/* <br />
            <hr />
            
            MainAccountPage
            <h1>Tên: {infoUser.fullName} </h1>
            <p>{infoUser.email}</p>
            <p>{currentUser.phoneNumber}</p>
            <p>{currentUser.team}</p>
            <p>{currentUser.userName}</p> */}
            
            <button onClick={onLogout}>Đăng xuất</button>
            <button onClick={onEdit}>Cập nhật</button>
          </div>
      </MainComponent>
  </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    user: state.auth.user,
    currentUser: state.currentUser
  };
};

const mapDispatchToProps = (dispatch:any) => {
  return{
    logout: () => dispatch(logout()),
    getUser: (id:number) => dispatch(getUser(id)),
    updateUser:(id:number, data:any) => dispatch(updateUser(id, data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainAccountPage);
