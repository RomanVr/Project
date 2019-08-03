import React from 'react';
import { Link } from 'react-router-dom';

export default function () {
  return (
    <div className = "container">
      <nav className = "navbar navbar-expand-lg navbar-info fixed-top bg-dark">
        <Link className = 'navbar-brand' to = '/'>AEON</Link>
        <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item">
              <Link className="nav-link" to = "/chat">Чат</Link>
          </li>
        </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
                <Link className="nav-link" to = "/session/new">Регистрация</Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
                <Link className="nav-link" to="/session">Войти</Link>
            </li>

          </ul>
        </div>
    </nav>
</div>
  );
}
