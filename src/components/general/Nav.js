import React from 'react';
import { Link } from 'react-router-dom';

import './nav.css';

const Nav = () => (
  <nav className="nav">
    <ul className="nav-list">
      <li className="nav-item"><Link to="/">Home</Link></li>
      <li className="nav-item"><Link to="/articles">Articles</Link></li>
    </ul>
  </nav>
);

export default Nav;
