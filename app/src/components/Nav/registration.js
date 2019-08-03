import React from 'react';
import { NavLink } from 'react-router-dom';

export default props => (
  <ul className="navbar-nav">
    <li className="nav-item">
      <NavLink
        className="nav-link"
        to = "/session/new"
        onClick = { props.onSetTitle }
      >Зарегистрироваться</NavLink>
    </li>
    <li className="nav-item">
      <NavLink
        className="nav-link"
        to = "/session"
        onClick = { props.onSetTitle }
      >Войти</NavLink>
    </li>
  </ul>);
