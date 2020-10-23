import React from 'react';
import HeaderIntro from '../../../../components/HeaderIntro';
import { MainComponent } from '../../../Main';

const MainDashBoardPage: React.FC<IProps> = (props) =>{
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