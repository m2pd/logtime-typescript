import { Container, Grid } from '@material-ui/core';
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../../assets/images/zentao-logo.png";
import './Header.scss';

Header.propTypes = {};

function Header() {
  return (
    <header className="header">
      <Container >

      
      <Grid container justify="space-between" alignItems="center">
          <Grid item>
            <a
              className="header__link header__title"
              href="http://quanly.mitechcenter.vn/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mitech Zentao
              <img src={logo} className="header__logo" alt="logo" />
            </a>
          </Grid>

          <Grid item>
            <NavLink
              exact
              className="header__link mr-4"
              to="/account"
              activeClassName="header__link--active"
            >
              Tài khoản
            </NavLink>
            <NavLink
              exact
              className="header__link  mr-4"
              to="/timesheet"
              activeClassName="header__link--active"
            >
              Danh sách
            </NavLink>
            <NavLink
              exact
              className="header__link"
              to="/timesheet/add"
              activeClassName="header__link--active"
            >
              Thêm mới
            </NavLink>
          </Grid>
      </Grid>
      </Container>
    </header>
  );
}

export default Header;