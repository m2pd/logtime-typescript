import React, {useEffect, useCallback} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HeaderIntro from '../../../../components/HeaderIntro';
import { getAllUsers } from '../../../../redux/actions/userAction';
import { MainComponent } from '../../../Main';

const MainDashBoardPage: React.FC<IProps> = (props) =>{
  const currentUser = useSelector((state: any) => state.currentUser);
  const userRoles = currentUser.userRoles;
  const isAdmin = userRoles.includes('Leader') && userRoles.includes('Admin');
  
  const dispatch = useDispatch();
  const onFetchAllUser = useCallback(
    () => {
        dispatch(getAllUsers())
    },
    [dispatch]
)
 
  useEffect(() => {
    if(isAdmin){
      onFetchAllUser()
    }
  }, [isAdmin, onFetchAllUser])

  return(
    <div>
      <MainComponent>
          <HeaderIntro
            title='Trang quản trị'
            intro='Chào mừng các bạn đến với MITECH WORKPLACE'
          />
          <div className="page-content">
            <h1>MainDashBoardPage</h1>
          </div>
      </MainComponent>
    </div>
  )
}

export default MainDashBoardPage;

interface IProps{
  
}