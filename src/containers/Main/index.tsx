import React, {ReactNode, useState } from 'react'
import BreadcrumbsComponent from '../../components/BreadcrumbsComponent';
// import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

interface Props {
    children: ReactNode
}

export const MainComponent:React.FC<Props> = (props) => {

    const [isShowMenu, setIsShowMenu] = useState(false)

    //Change status of toggle
    const onChangeToggle = () => {
        setIsShowMenu(!isShowMenu)
    }

    //Click after blank wrapper is close
    const checkCloseWrapper = (e:any) => {
        // if(e.target.className.includes('wrap-component open')){
        //     //Call function change status toggle
        //     onChangeToggle();
        // } else{
        //     // return;
        // }
    }

    return (
        <div className={`wrap-component ${isShowMenu ? 'open' : ''}  `}
            onClick={checkCloseWrapper}
        >
            
            {/* <Header /> */}
            <Sidebar
                isShowMenu={isShowMenu}
                onChangeToggle={onChangeToggle}
            />
            <div className='main-content'>
                <div className="main-page">
                    <BreadcrumbsComponent />
                    {props.children} 
                </div>
            </div>
        </div>
    )
}
