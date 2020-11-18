import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert';
import HeaderIntro from '../../../../components/HeaderIntro';
import { User } from '../../../../constaints/interface';
import { getAllUsers } from '../../../../redux/actions/userAction';
import userService from '../../../../services/user.service';
import { MainComponent } from '../../../Main';
import AccountsList from '../../components/AccountsList';

const MainAccountListPage: React.FC<IProps> = (props) =>{
  const dispatch = useDispatch();
  const users = useSelector((state:any )=> state.users)

  const handleAccountRemoveClick = (values:any) => {
    const idUser:number = values[0];
    swal({
      title: "Có chắc là muốn xóa không?",
      text: "Chắc rồi thì nhấn OK đi",
      icon: "warning",
      buttons:  ["Thôi, không xóa nữa đâu!", "OK nè !"],
      dangerMode: true,
    })
    .then((willUpdate) => {
        if (willUpdate) {
            userService.deleteUser(idUser)
            .then(res => {
                //re-render after remove account
                onFetchAllUser();
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

  const handleAccountEditClick = (values:any) => {
    console.log(values[0])
  }

  const onFetchAllUser = useCallback(
    () => {
        dispatch(getAllUsers())
    },
    [dispatch]
  )

  useEffect(() => {
    onFetchAllUser();
  }, [onFetchAllUser])

  console.log(users)
  return(
    <div>
      <MainComponent>
          <HeaderIntro
            title='Trang quản trị'
            intro='Chào mừng các bạn đến với MITECH WORKPLACE'
            isButtonAdd={false}
          />
          <div className="page-content">
            <h1>MainAccountListPage</h1>
            <AccountsList
              data={users.users}
              onAccountRemoveClick={handleAccountRemoveClick}
              onAccountEditClick={handleAccountEditClick}
            />
          </div>
      </MainComponent>
    </div>
  )
}

export default MainAccountListPage;

interface IProps{
  
}