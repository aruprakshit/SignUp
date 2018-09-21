import React from 'react';
import { connect } from 'react-redux';

import Bids from '../Components/Bids';
import { CreateBid } from '../actions';

class BidsContainer extends React.Component {
  render() {
    return <Bids {...this.props} />;
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addBid: payload => {
      dispatch(CreateBid(ownProps.projectId, payload));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(BidsContainer);
