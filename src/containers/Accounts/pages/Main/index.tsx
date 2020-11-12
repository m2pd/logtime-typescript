import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HeaderIntro from '../../../../components/HeaderIntro';
import { User } from '../../../../constaints/interface';
import { getAllUsers } from '../../../../redux/actions/userAction';
import { MainComponent } from '../../../Main';
import AccountsList from '../../components/AccountsList';

const MainAccountListPage: React.FC<IProps> = (props) =>{
  const dispatch = useDispatch();
  const users = useSelector((state:any )=> state.users)

  const handleAccountRemoveClick = (values:User) => {
    console.log(values)
  }

  const handleAccountEditClick = (values:User) => {
    console.log(values)
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