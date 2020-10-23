import React from 'react';
import HeaderIntro from '../../../../components/HeaderIntro';
import { MainComponent } from '../../../Main';

const MainDashBoardPage: React.FC<IProps> = (props) =>{
  return(
    <div>
      <MainComponent>
          <HeaderIntro
            title='Tài khoản'
            intro='Trang thông tin tài khoản'
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