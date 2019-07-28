import React from 'react';

export default function () {
  return (
    <div className = "container">
      <nav className = "navbar navbar-expand-lg navbar-info fixed-top bg-dark">
        <a className = 'navbar-brand' href = '/'>AEON</a>
        <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item">
              <a className="nav-link" href="#/chat">Чат</a>
          </li>
        </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link" href="#/session/new">Регистрация</a>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link" href="#/session">Войти</a>
            </li>

          </ul>
        </div>
    </nav>
</div>
  );
}
