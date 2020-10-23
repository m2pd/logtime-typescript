import React from 'react'
import HeaderIntro from '../../../../components/HeaderIntro'
import { MainComponent } from '../../../Main'

function MainLoginPage() {
    return (
        <div>
            <MainComponent>
                <div className="main-page">
                    <HeaderIntro
                        title='Danh sách time sheet'
                        intro='Trang thông tin danh sách các công việc time sheet'
                    />
                    <div className="page-content">   
                        <h1>MainTimesheet Page</h1>
                    </div>     
                </div>    
            </MainComponent>
        </div>
    )
}

export default MainLoginPage
