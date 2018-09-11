import React from 'react';
import { Link } from '@reach/router';

export default function Main(props) {
  return (
    <div
      id="authentication-container"
      className="container-fluid Registration-Wrapper"
    > 
      <div className="row no-gutters">
        <div className="col-12 col-md-6 d-flex Consumer-Left-Logo justify-content-center align-items-center">
          <div className="mr-md-auto ml-md-5 pl-md-4 mt-5 mt-md-0">
            <p className="Are-you-a text-left mb-4">Are you a</p>
            <p className="Consumer text-left mb-5">Consumer?</p>
            <Link
              to="consumer"
              className="btn btn-default Sign-up-as-a-Consume"
            >
              Sign up as a Consumer
            </Link>
          </div>
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center Consumer-Right-Logo">
          <div className="mr-md-auto ml-md-5 pl-md-4">
            <p className="Are-you-a text-left mb-4">Are you a</p>
            <p className="Contractor text-left mb-5">Contractor?</p>
            <Link
              to="contractor"
              className="btn btn-default Sign-up-as-a-Contrac"
            >
              Sign up as a Contractor
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
