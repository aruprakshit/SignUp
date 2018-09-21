import React from 'react';
import { connect } from 'react-redux';

import Main from '../Components/Main';
import { fetchProject } from '../actions';

class MainContainer extends React.Component {
  componentDidMount() {
    this.props.loadProject(this.props.projectId);
  }

  render() {
    return <Main >{this.props.children}</Main>;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadProject: id => {
      dispatch(fetchProject(id));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(MainContainer);
