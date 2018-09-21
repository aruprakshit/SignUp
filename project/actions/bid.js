import { CREATE_BIDS_SUCCEEDED, CREATE_BIDS_PENDING } from '../actionTypes';
import { createApi as createBidApi } from '../../lib/api/bids';

function requestBidCreation() {
  return {
    type: CREATE_BIDS_PENDING,
    payload: {}
  };
}

function requestedBidCreated(data) {
  return {
    type: CREATE_BIDS_SUCCEEDED,
    payload: { data }
  };
}

export function CreateBid(projectId, payload) {
  return (dispatch, getState, params) => {
    dispatch(requestBidCreation());
    return createBidApi(
      { data: payload, projectId },
      { authToken: params.authToken },
      data => {
        dispatch(requestedBidCreated(data));
      },
      error => {
        console.log(error);
      }
    );
  };
}
