import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import "./HeaderIntro.scss"

HeaderIntro.propTypes = {
    title: PropTypes.string,
    intro: PropTypes.string,
    link: PropTypes.string,
    isButtonAdd: PropTypes.bool,

}

HeaderIntro.defaultProps = {
    title: '',
    intro: '',
    link:'/timesheet/add',
    isButtonAdd: true,
}

function HeaderIntro(props) {
    const { title, intro, link, isButtonAdd } = props;
    return (
        <div className="page-head">
            <div className="page-head--text">
                <h1 className="heading-1">{title}</h1>
                <h5 className="heading-5">{intro}</h5>
            </div>
            <div className="page-head--button">
                {
                    isButtonAdd 
                        ? <Link to={link} className="btnF btnF--primary btnF--sm"> Thêm mới</Link>
                        : ""
                }
                
            </div>
    </div>
    )
}

export default HeaderIntro;

