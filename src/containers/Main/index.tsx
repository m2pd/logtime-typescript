import React, { Component, ReactNode } from 'react'
import BreadcrumbsComponent from '../../components/BreadcrumbsComponent';
// import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

type Props = {
    children: ReactNode
}

export class MainComponent extends Component<Props> {
    render(){
        return (
            <div className='wrap-component'>
                {/* <Header /> */}
                <Sidebar />
                <div className='main-content'>
                    <div className="main-page">
                        <BreadcrumbsComponent />
                        {this.props.children} 
                    </div>
                </div>
            </div>
        )
    }
}
