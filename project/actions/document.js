import {
  REQUEST_PROJECT_DOCUMENTS,
  RECEIVE_PROJECT_DOCUMENTS
} from '../actionTypes';
import { fetchDocumentsApi } from '../../lib/api/documents';

function requestDocuments() {
  return {
    type: REQUEST_PROJECT_DOCUMENTS,
    payload: {}
  };
}

function receiveDocuments(data) {
  return {
    type: RECEIVE_PROJECT_DOCUMENTS,
    payload: { data }
  };
}

export function fetchDocuments(postId) {
  return (dispatch, getState, params) => {
    dispatch(requestDocuments());
    return fetchDocumentsApi(
      postId,
      { authToken: params.authToken },
      data => {
        dispatch(receiveDocuments(data));
      },
      error => {
        console.log(error);
      }
    );
  };
}
