import React, { Component } from 'react';

import SideBar from '../Shared/SideBar';
import Footer from '../Shared/Footer';
import Form from './Form';

import './styles';

export default class Contractor extends Component {
  render() {
    const { errors, fields, createUser, updateFormFields } = this.props;

    return (
      <div className="container-fluid Contractor-Wrapper">
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
