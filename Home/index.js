import React, { Fragment } from 'react';

import Header from './Header';
import Main from './Main';

import './styles/index';

// https://reach.tech/router/tutorial/04-router

export default function Home(props) {
  return (
    <Fragment>
      <Header />
      <Main />
    </Fragment>
  )
}
