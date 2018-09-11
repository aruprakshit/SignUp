import React from 'react';

export default function SideBar(props) {
  return (
    <div className="col-3 Consumer-Sidebar">
      <div className="d-flex flex-column align-items-center">
        <a href="/" className="Vate">
          Vate
        </a>
        <div className="Social-Icons d-flex-inline">
          <i className="fa fa-facebook ml-auto" />
          <i className="fa fa-twitter ml-5 mr-5" />
          <i className="fa fa-instagram mr-auto" />
        </div>
      </div>
    </div>
  );
}
