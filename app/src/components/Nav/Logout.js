import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <ul className="navbar-nav">
    <li className="nav-item">
      <Link className="nav-link" to = "/session/delete">Выход</Link>
    </li>
  </ul>
);
