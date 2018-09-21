import {
  CREATE_BIDS_PENDING,
  CREATE_BIDS_SUCCEEDED,
  CREATE_BIDS_FAILED
} from '../actionTypes';

const initialState = {
  isSaving: false,
  byId: {},
  allIds: []
};

export function bids(state = initialState, action) {
  switch (action.type) {
    case CREATE_BIDS_PENDING:
      return {
        ...state,
        isSaving: true
      };
    case CREATE_BIDS_SUCCEEDED:
      const { bid } = action.payload.data;
      return {
        ...state,
        isSaving: false,
        byId: {
          ...state.byId,
          [bid.id]: {
            bid
          }
        },
        allIds: [...state.allIds, bid.id]
      };
    case CREATE_BIDS_FAILED:
      return { ...state, isSaving: false };
    default:
      return state;
  }
}
