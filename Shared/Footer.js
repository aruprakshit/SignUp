import React from 'react';

export default function Footer(props) {
  return (
    <div className="col-12 Consumer-Footer">
      <div className="d-flex justify-content-center align-items-center">
        <p className="Already-Have-an-acco">Already Have an account?</p>
        <a href="/users/sign_in" className="btn btn-default ml-auto Sign-In">
          Sign In
        </a>
      </div>
    </div>
  );
}
