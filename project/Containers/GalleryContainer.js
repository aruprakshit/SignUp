import React from 'react';
import { connect } from 'react-redux';

import Gallery from '../Components/Gallery';
import { fetchDocuments } from '../actions';

class GalleryContainer extends React.Component {
  componentDidMount() {
    this.props.loadAttachments(this.props.projectId);
  }

  render() {
    const { documents } = this.props;
    const props = { documents };
    return <Gallery {...props} />;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadAttachments: id => {
      dispatch(fetchDocuments(id));
    }
  };
};

const mapStateToProps = state => {
  const { documents } = state;
  return { documents };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GalleryContainer);
