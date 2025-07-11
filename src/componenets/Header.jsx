import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm px-4">
      <Link className="navbar-brand fw-bold text-white" to="/">
        Employee App
      </Link>

      <div className="d-flex ms-auto">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/favorites">Favorites</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
