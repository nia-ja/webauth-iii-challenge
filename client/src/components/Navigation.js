import React from 'react';
// import { NavLink } from 'react-router-dom';
import { NavComp, NavItem } from '../styles/';
import LogoutIcon from '../img/logout.png';

function Navigation(props) {
    return (
      <>
        <NavComp>
            <NavItem to="/login" activeClass="active-nav-item">Login</NavItem>
            <NavItem to="/signup" activeClass="active-nav-item">Signup</NavItem>
            <NavItem to="/users" activeClass="active-nav-item">Users</NavItem>
                
            <img className="non-hover" src={LogoutIcon} onClick={props.logout} />
        </NavComp>
      </>
    );
}
  
export default Navigation;
  