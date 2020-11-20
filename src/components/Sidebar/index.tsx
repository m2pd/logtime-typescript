import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React from 'react';
import { connect } from 'react-redux';
// import AccordionComponent from '../Arcodion/Accordion.component';
import { Link, NavLink } from 'react-router-dom';
import { UserCurrent } from '../../containers/Account/pages/Main';
import avatar from '../../logo.svg';
import './Sidebar.scss';

function Sidebar(props:any) {
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

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
                    {/* <NavLink
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
                    </NavLink> */}
                    {/* <NavLink
                        exact
                        className="sidebar__link "
                        to="/timesheet/add"
                        activeClassName="sidebar__link--active"
                    >
                        <i className="icon fas fa-plus"></i>
                        Thêm mới
                    </NavLink> */}
                                        {
                    props.currentUser.userRoles.includes('Admin')
                    ? <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <Typography className="sidebar__link">
                            <i className="icon fas fa-user-alt"></i>
                                Tài khoản
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className="sidebar__link--item">
                                <NavLink
                                    exact
                                    className="sidebar__link "
                                    to="/accounts"
                                    activeClassName="sidebar__link--active"
                                >
                                    <i className="icon fas fa-calendar"></i>
                                    Danh sách
                                </NavLink>
                                <NavLink
                                    exact
                                    className="sidebar__link "
                                    to="/accounts/add"
                                    activeClassName="sidebar__link--active"
                                >
                                    <i className="icon fas fa-plus"></i>
                                    Thêm mới
                                </NavLink>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    : <NavLink
                            exact
                            className="sidebar__link "
                            to="/account"
                            activeClassName="sidebar__link--active"
                        >
                            <i className="icon fas fa-calendar"></i>
                            Tài khoản
                        </NavLink>
                    }
                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2bh-content"
                            id="panel2bh-header"
                        >
                            <Typography className="sidebar__link">
                            <i className="icon fas fa-user-clock "></i>
                                Time Sheet
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography className="sidebar__link--item">
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
                            {props.currentUser.userRoles.includes('Admin') &&
                                <NavLink
                                    exact
                                    className="sidebar__link "
                                    to="/timesheet/team"
                                    activeClassName="sidebar__link--active"
                                >
                                    <i className="icon fas fa-layer-group"></i>
                                    Team
                                </NavLink>
                            }
                        </Typography>
                        </AccordionDetails>
                    </Accordion>

                    {/* <AccordionComponent/> */}
                </div>
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
