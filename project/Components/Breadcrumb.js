import React from 'react';

export default function Breadcrumb(props) {
  return (
    <div className="d-inline-flex top-header-nav w-100">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb align-self-center">
          <li className="back vertically-aligned"><a className="arrow-left" href="/" /></li>
          <li className="breadcrumb-item vertically-aligned">
            <a href="#">Dashboard</a>
          </li>
          <li className="breadcrumb-item vertically-aligned">
            <a href="#">Paint</a>
          </li>
          <li className="breadcrumb-item active vertically-aligned" aria-current="page">
            <span>Project Name</span>
          </li>
        </ol>
      </nav>
    </div>
  );
}
