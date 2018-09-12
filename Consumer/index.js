import React, { Component } from 'react';

import SideBar from '../Shared/SideBar';
import Form from './Form';
import Footer from '../Shared/Footer';

import './styles/style';

export default class Consumer extends Component {
  render() {
    console.log(this.props);

    const {
      errors,
      fields: { email, username, password, passwordConfirmation },
      createUser,
      updateFormFields
    } = this.props;

    const fields = { email, username, password, passwordConfirmation };

    return (
      <div className="container-fluid Consumer-Wrapper">
        <div className="row">
          <SideBar />
          <div className="col-9 d-flex">
            <div className="row m-auto w-40">
              <Form
                {...fields}
                errors={errors}
                onFormSubmit={createUser}
                onInputChange={updateFormFields}
              />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
