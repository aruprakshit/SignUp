import React from 'react';
import { connect } from 'react-redux';

import Questions from '../Components/Questions';
import { fetchQuestions } from '../actions';

class QuestionsContainer extends React.Component {
  componentDidMount() {
    this.props.loadQuestions(this.props.projectId);
  }

  render() {
    const { questions, answers } = this.props;
    const props = { questions, answers };

    return <Questions {...props} />;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadQuestions: id => {
      dispatch(fetchQuestions(id));
    }
  };
};

const mapStateToProps = state => {
  const { questions, answers } = state;
  return { questions, answers };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionsContainer);
