import React from 'react';
import { Router } from '@reach/router';

import StepOne from './StepOne';
import StepTwo from './StepTwo';

export default function Form(props) {
  const {
    firstName,
    lastName,
    companyName,
    email,
    username,
    password,
    passwordConfirmation,
    ...restProps
  } = props;

  const StepOneProps = { firstName, lastName, companyName };
  const StepTwoProps = { email, username, password, passwordConfirmation };

  return (
    <div className="col-12 Contractor-Main">
      <p className="Sign-up-as-a mb-4">Sign up as a</p>
      <h3 className="Contractor">Contractor</h3>
      <Router className="form">
        <StepOne path="/" {...StepOneProps} {...restProps} />
        <StepTwo path="two" {...StepTwoProps} {...restProps} />
      </Router>
    </div>
  );
}
