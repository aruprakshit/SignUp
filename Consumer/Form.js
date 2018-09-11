import React from 'react';
import classNames from 'classnames';

export default function Form(props) {
  const {
    email,
    username,
    password,
    passwordConfirmation,
    onInputChange,
    onFormSubmit,
    errors
  } = props;

  const onChange = ({ target }) => {
    onInputChange(target.name, target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    onFormSubmit();
  };

  const hasValidationErrors = () => {
    const errorKeys = Object.keys(errors);
    const names = ['email', 'password', 'username', 'password_confirmation'];

    if (errorKeys.length === 0) return false;

    return errorKeys.some(
      key => names.includes(key) && errors[key].length !== 0
    );
  };

  const validationErrorText = keyName => {
    const messages = errors[keyName] || [];
    return messages.join(', ');
  };

  const hasErrorKey = keyName =>
    Object.keys(errors).includes(keyName) && errors[keyName].length !== 0;

  return (
    <div className="col-12 Consumer-Main">
      <p className="Sign-up-as-a mb-4">Sign up as a</p>
      <h3 className="Homeowner">Homeowner</h3>
      <div className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="Consumer-Email" className="Input-Label">
              Email address
            </label>
            <input
              type="email"
              className={classNames('form-control', {
                'is-invalid': hasErrorKey('email')
              })}
              id="Consumer-Email"
              placeholder="name@domain.com"
              value={email}
              name="email"
              onChange={onChange}
            />
            {hasErrorKey('email') && (
              <div className="invalid-feedback text-left">
                Email&nbsp;{validationErrorText('email')}
              </div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="Consumer-Username" className="Input-Label">
              Username
            </label>
            <input
              type="text"
              className={classNames('form-control', {
                'is-invalid': hasErrorKey('username')
              })}
              id="Consumer-Username"
              placeholder="username"
              value={username}
              name="username"
              onChange={onChange}
            />
            {hasErrorKey('username') && (
              <div className="invalid-feedback text-left">
                Username&nbsp;{validationErrorText('username')}
              </div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="Consumer-Password" className="Input-Label">
              Password
            </label>
            <input
              type="password"
              className={classNames('form-control', {
                'is-invalid': hasErrorKey('password')
              })}
              id="Consumer-Password"
              placeholder="Minimum 6 character, Case sensitive"
              value={password}
              name="password"
              onChange={onChange}
            />
            {hasErrorKey('password') && (
              <div className="invalid-feedback text-left">
                Password&nbsp;{validationErrorText('password')}
              </div>
            )}
          </div>
          <div className="form-group">
            <label
              htmlFor="Consumer-Password-Confirmation"
              className="Input-Label"
            >
              Repeat Password
            </label>
            <input
              type="password"
              className={classNames('form-control', {
                'is-invalid': hasErrorKey('password_confirmation')
              })}
              id="Consumer-Password-Confirmation"
              placeholder="Re enter passsword"
              value={passwordConfirmation}
              name="passwordConfirmation"
              onChange={onChange}
            />
            {hasErrorKey('password_confirmation') && (
              <div className="invalid-feedback text-left">
                Password Confirmation&nbsp;{validationErrorText(
                  'password_confirmation'
                )}
              </div>
            )}
          </div>
          <button
            type="submit"
            className="btn btn-default Finish-Sign-Up w-100"
            disabled={hasValidationErrors()}
          >
            Finish Sign-Up
          </button>
        </form>
      </div>
    </div>
  );
}
