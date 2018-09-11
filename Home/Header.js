import React from 'react';

export default function Header(props) {
  return (
    <div className="container-fluid Registration-Nav">
      <nav className="navbar">
        <a className="navbar-brand mjv-logo" href="/">
          mjv
        </a>
        <div className="d-flex align-items-center justify-content-between Sign-in-container">
          <span className="Already-Have-an-account">
            Already Have an account?
          </span>
          <a className="btn btn-default Sign-In">Sign in</a>
        </div>
      </nav>
    </div>
  );
}
