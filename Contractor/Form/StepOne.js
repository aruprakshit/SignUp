import React from 'react';
import { Link } from '@reach/router';

export default function StepOne(props) {
  const { firstName, lastName, companyName, onInputChange } = props;

  const onChange = ({ target }) => {
    onInputChange(target.name, target.value);
  };

  return (
    <form>
      <div className="form-group">
        <label htmlFor="Contractor-Company-Name" className="Input-Label">
          Company Name
        </label>
        <input
          autoFocus={true}
          id="Contractor-Company-Name"
          className="form-control"
          placeholder="Company Name"
          type="text"
          name="companyName"
          value={companyName}
          onChange={onChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="Contractor-First-Name" className="Input-Label">
          POC First Name
        </label>
        <input
          id="Contractor-First-Name"
          className="form-control"
          placeholder="POC First Name"
          type="text"
          name="firstName"
          value={firstName}
          onChange={onChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="Contractor-Last-Name" className="Input-Label">
          POC Last Name
        </label>
        <input
          id="Contractor-Last-Name"
          className="form-control"
          placeholder="POC Last Name"
          required="required"
          type="text"
          name="lastName"
          value={lastName}
          onChange={onChange}
        />
      </div>
      <Link className="btn btn-default Next-Step w-100" to="two">
        Next Step
      </Link>
    </form>
  );
}
