import React, { Component } from 'react';

import { authToken } from '../helpers/authToken';

import {
  ValidateEmailApi,
  validateUsernameApi,
  createUserAPI
} from '../lib/api/signup';

export default class CreateUserForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: {
        email: '',
        username: '',
        password: '',
        passwordConfirmation: '',
        firstName: '',
        lastName: '',
        companyName: ''
      },
      errors: {}
    };
  }

  updateFormFields = (name, value) => {
    this.setState(
      prevState => ({
        fields: { ...prevState.fields, [name]: value }
      }),
      () => this.runFieldValidations(name)
    );
  };

  runFieldValidations(name) {
    switch (name) {
      case 'email':
        this.hasEmailTaken();
        break;
      case 'username':
        this.hasUsernameTaken();
        break;
      case 'password':
      case 'passwordConfirmation':
        this.validatePassword();
        break;
      default:
      // ...
    }
  }

  createUser = data => {
    const { fields } = this.state;

    createUserAPI(
      { data: { user: { ...fields, category: 'contractor' } } },
      {
        authToken: authToken()
      },
      data => {
        window.location.href = '/';
      },
      error => {
        this.setState(prevState => ({
          errors: { ...error.response.data.errors }
        }));
      }
    );
  };

  hasUsernameTaken() {
    validateUsernameApi(
      { data: { username: this.state.fields.username } },
      { authToken: authToken() },
      data => {
        this.setState(prevState => ({
          errors: { ...prevState.errors, username: [] }
        }));
      },
      error => {
        this.setState(prevState => ({
          errors: { ...prevState.errors, ...error.response.data }
        }));
      }
    );
  }

  validatePassword() {
    const { password, passwordConfirmation } = this.state.fields;

    if (password === passwordConfirmation) {
      this.setState(prevState => ({
        errors: { ...prevState.errors, password_confirmation: [], password: [] }
      }));
    } else {
      this.setState(prevState => ({
        errors: {
          ...prevState.errors,
          password_confirmation: ["doesn't match Password"]
        }
      }));
    }
  }

  hasEmailTaken() {
    ValidateEmailApi(
      { data: { email: this.state.fields.email } },
      {
        authToken: authToken()
      },
      data => {
        this.setState(prevState => ({
          errors: { ...prevState.errors, email: [] }
        }));
      },
      error => {
        this.setState(prevState => ({
          errors: { ...prevState.errors, ...error.response.data }
        }));
      }
    );
  }

  render() {
    const handlers = {
      createUser: this.createUser,
      updateFormFields: this.updateFormFields
    };

    return this.props.render({ state: this.state, handlers });
  }
}
