import React, { Component } from 'react';

import SideBar from '../Shared/SideBar';
import Form from './Form';
import Footer from '../Shared/Footer';

import {
  ValidateEmailApi,
  validateUsernameApi,
  createUserAPI
} from '../../lib/api/signup';
import { authToken } from '../../helpers/authToken';

import './styles/style';

export default class Consumer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: {
        email: '',
        username: '',
        password: '',
        passwordConfirmation: ''
      },
      errors: {},
      ui: {
        isAccepted: false
      }
    };
  }

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

  changeUserFields = (name, value) => {
    this.setState(
      prevState => ({
        fields: { ...prevState.fields, [name]: value }
      }),
      () => this.runFieldValidations(name)
    );
  };

  createUser = data => {
    const { fields } = this.state;

    createUserAPI(
      { data: { user: { ...fields, category: 'consumer' } } },
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
    const { errors, fields } = this.state;

    return (
      <div className="container-fluid Consumer-Wrapper">
        <div className="row">
          <SideBar />
          <div className="col-9 d-flex">
            <div className="row m-auto w-40">
              <Form
                {...fields}
                errors={errors}
                onFormSubmit={this.createUser}
                onInputChange={this.changeUserFields}
              />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
