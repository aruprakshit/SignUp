import {
  READ_QUESTIONS_PENDING,
  READ_QUESTIONS_SUCCEEDED
} from '../actionTypes';
import { fetchQuestionsApi } from '../../lib/api/questions';

function requestQuestions() {
  return {
    type: READ_QUESTIONS_PENDING,
    payload: {}
  };
}

function receiveQuestions(data) {
  return {
    type: READ_QUESTIONS_SUCCEEDED,
    payload: { data }
  };
}

export function fetchQuestions(postId) {
  return (dispatch, getState, params) => {
    dispatch(requestQuestions());
    return fetchQuestionsApi(
      postId,
      { authToken: params.authToken },
      data => {
        dispatch(receiveQuestions(data));
      },
      error => {
        console.log(error);
      }
    );
  };
}
