import React from 'react';
import { render } from 'react-dom';

import Home from './Home';
import Contractor from './Contractor';
import Consumer from './Consumer';
import { Router } from '@reach/router';

function App() {
  return (
    <Router basepath="users/sign_up" className="Main-Root-Router-Wrapper">
      <Home path="/" />
      <Consumer path="consumer" />
      <Contractor path="contractor/*" />
    </Router>
  );
}

const destination = document.getElementById('root');

document.addEventListener('DOMContentLoaded', () => {
  render(<App />, destination);
});
