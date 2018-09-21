import React from 'react';

import Nav from './Nav';

export default function Main(props) {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-md-12 Main">
          <Nav />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 Main">{props.children}</div>
      </div>
    </React.Fragment>
  );
}
