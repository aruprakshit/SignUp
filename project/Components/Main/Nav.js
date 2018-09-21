import React from 'react';
import { Link } from '@reach/router';

function NavLink(props) {
  return (
    <Link
      {...props}
      getProps={({ isCurrent }) => {
        return isCurrent ? { className: `${props.className} active` } : null;
      }}
    />
  );
}

export default function Nav(props) {
  return (
    <ul className="nav nav-fill">
      <li className="nav-item Line">
        <NavLink to="/projects/1" className="nav-link w-75 pb-4">
          Project details
        </NavLink>
      </li>
      <li className="nav-item Line">
        <NavLink to="gallery" className="nav-link w-75 pb-4">
          Gallery
        </NavLink>
      </li>
      <li className="nav-item Line">
        <NavLink to="questions" className="nav-link w-75 pb-4">
          Questions
        </NavLink>
      </li>
      <li className="nav-item Line">
        <NavLink to="bids" className="nav-link w-75 pb-4">
          Bids
        </NavLink>
      </li>
    </ul>
  );
}
