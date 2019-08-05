import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import _ from 'lodash';
import Registration from './Registration';
import Logout from './Logout';

const routes = {
  root: {
    path: '/',
    title: '',
  },
  chat: {
    path: '/chat',
    title: 'Чат',
  },
  sessionNew: {
    path: '/session/new',
    title: 'Регистрация',
  },
  session: {
    path: '/session',
    title: 'Пройдите идентификацию',
  },
};

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = { isLogin: false };
    this.onSetTitle = this.onSetTitle.bind(this);
  }

  onSetTitle(event) {
    const path = event.currentTarget.getAttribute('href');
    console.log('---path ', path);
    const routeName = routes[_.findKey(routes, { path })];
    this.setState({ title: routeName.title });
  }

  render() {
    const Register = this.state.isLogin
      ? Logout : Registration;
    return (
      <div className = "container">
        <nav className = "navbar navbar-expand-lg navbar-info fixed-top bg-dark">
          <NavLink onClick = { this.onSetTitle } className = 'navbar-brand' to = '/'>AEON</NavLink>
          <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                  <NavLink onClick = { this.onSetTitle } className="nav-link" to = "/chat">Чат</NavLink>
              </li>
            </ul>
            <span className = "text-white"><h3>{ this.state.title }</h3></span>
            <Register onSetTitle = { this.onSetTitle } />
          </div>
        </nav>
      </div>
    );
  }
}
