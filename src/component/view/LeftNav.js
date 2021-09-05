import React from 'react';
import { NavLink } from 'react-router-dom';

const LeftNav = () => {
  return (
    <div className="left-nav-container">
      <div className="icons">
        <div className="icons-bis">
          {/* <NavLink to='/Chat' exact activeClassName="active-left-nav">
            <img src="/images/imgChat/home.svg" alt="home"/>
          </NavLink>
          <br/>
          <NavLink to='/Tendance' exact activeClassName="active-left-nav">
            <img src="/images/imgChat/rocket.svg" alt="home"/>
          </NavLink>
          <br/> */}
          <NavLink to='/ProfilUser' exact activeClassName="active-left-nav">
            <img src="/images/imgChat/user.svg" alt="home"/>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default LeftNav;