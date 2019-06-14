import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation(props) {
    return (
      <>
        <nav>
            <NavLink to="/login" activeClass="active-nav-item">Login</NavLink>
            <NavLink to="/signup" activeClass="active-nav-item">Signup</NavLink>
            <NavLink to="/users" activeClass="active-nav-item">Users</NavLink>
            <button onClick={props.logout}>Logout</button>
        </nav>
      </>
    );
}
  
export default Navigation;
  