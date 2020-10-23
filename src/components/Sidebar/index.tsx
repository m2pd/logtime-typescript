import React from 'react'
import avatar from '../../logo.svg';

import './Sidebar.scss'
// import AccordionComponent from '../Arcodion/Accordion.component';
import { Link, NavLink } from 'react-router-dom';
import {connect} from 'react-redux'
import { UserCurrent } from '../../containers/Account/pages/Main';

function Sidebar(props:any) {
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <Link to="/">
                    <span>MITECH WORKPLACE</span>
                </Link>
            </div>
            <div className="sidebar-user">
                <div className="sidebar-user--image">
                    <div className="sidebar-user--avatar">
                        <img src={avatar} alt="avatar"/>
                    </div>
                </div>
                <div className="sidebar-user--info">
                    <h5 className="sidebar-user--name">
                        {props.currentUser.fullName}
                    </h5>
                        {props.currentUser.userRoles.map((item:UserCurrent, index:number) => <p className="sidebar-user--rule" key={index}>{item}</p>)}
                </div>
            </div>
            <div className="sidebar-content">
                <div className="sidebar-content--header">
                    Bảng chức năng
                </div>
                <div className="sidebar__menu">
                    <NavLink
                        exact
                        className="sidebar__link"
                        to="/account"
                        activeClassName="sidebar__linkW"
                    >
                        <i className="icon fas fa-user"></i>
                        Tài khoản
                    </NavLink>
                    <NavLink
                        exact
                        className="sidebar__link "
                        to="/timesheet"
                        activeClassName="sidebar__link--active"
                    >
                        <i className="icon fas fa-calendar"></i>
                        Danh sách
                    </NavLink>
                    <NavLink
                        exact
                        className="sidebar__link "
                        to="/timesheet/add"
                        activeClassName="sidebar__link--active"
                    >
                        <i className="icon fas fa-plus"></i>
                        Thêm mới
                    </NavLink>
                </div>
                {/* <AccordionComponent/> */}
            </div>
        </div>
    )
}



const mapStateToProps = (state:any) => {
    return{
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps)(Sidebar)
