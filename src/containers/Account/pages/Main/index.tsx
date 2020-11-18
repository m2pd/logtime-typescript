import React from 'react';
import { connect } from 'react-redux';
import swal from 'sweetalert';
import HeaderIntro from '../../../../components/HeaderIntro';
import { logout } from '../../../../redux/actions/authAction';
import { getUser, updateUser } from '../../../../redux/actions/userAction';
import { MainComponent } from '../../../Main';
import AccountForm from '../../components/AccountForm';


export interface UserCurrent{
  id:number;
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
  // const {user, currentUser,history} = props;
  const {history} = props;

  const infoUser = JSON.parse(localStorage.getItem('currentUser') || "{}");
  const idUser = +infoUser.id

  //---------------- START Get values from API -----------------
  // const [id, setId] = useState(idUser)
  // const [userCurrent, setUserCurrent] = useState<UserCurrent>({
  //   email:"",
  //   fullName:"",
  //   phoneNumber:"",
  //   userName:"",
  //   team:"",
  //   userRoles:[]
  // })

  // useEffect(() => {
  //   console.log("START")
  //   props.getUser(id)
  //   .then(() => {
  //     setUserCurrent(currentUser);
  //   })
  // }, [id])
  //---------------- END Get values from API -----------------

  const onEdit = (values:any, actions:any):void  =>{
    //Cancel submit status
    actions.setSubmitting(false);
    console.log(values)
    console.log(values.fullName)
    const data = Object.assign({},infoUser,{
      fullName: values.fullName,
      phoneNumber: values.phoneNumber,
      password:values.password,
      roles:values.userRoles
    })

    swal({
      title: "Có chắc là muốn sữa không?",
      text: "Chắc rồi thì nhấn OK đi",
      icon: "warning",
      buttons:  ["Thôi, không sửa nữa đâu!", "OK nè !"],
      dangerMode: true,
    })
    .then((willUpdate) => {
      if (willUpdate) {
        actions.setSubmitting(true);
        props.updateUser(idUser, data)
        .then(() => {
          history.push('/dashboard');
          // toast.success("Câp nhật thành công !", {
          //   position: toast.POSITION.TOP_LEFT
          // });
          // window.location.reload();
        })
        .catch(() =>{
          // toast.error("Câp nhật không thành công !", {
          //   position: toast.POSITION.TOP_LEFT
          // });
        })
        swal("Cập nhật thành công", {
          icon: "success",
        });
      } else {
        swal("Suy nghĩ kĩ rồi mới sữa nghen <3");
      }
    });    
  }

  return (
    <div >
      <MainComponent>
          <HeaderIntro
            title='Tài khoản'
            intro='Trang thông tin tài khoản'
            isButtonAdd={false}
          />
          <div className="page-content">
              
            <AccountForm
              initialValues={props.currentUser}
              onSubmit={onEdit}
            />
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
