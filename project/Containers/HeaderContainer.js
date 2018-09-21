import React from 'react';
import { connect } from 'react-redux';

import Header from '../Components/Header';

function HeaderContainer(props) {
  return <Header {...props.project} />;
}

function mapStateToProps(state) {
  const { projects } = state;
  return { project: projects.byId[projects.allIds[0]] };
}

export default connect(mapStateToProps)(HeaderContainer);
