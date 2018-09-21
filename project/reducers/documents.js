import {
  REQUEST_PROJECT_DOCUMENTS,
  RECEIVE_PROJECT_DOCUMENTS
} from '../actionTypes';

const initialState = {
  isFetching: false,
  byId: {},
  allIds: []
};

export function documents(state = initialState, action) {
  switch (action.type) {
    case REQUEST_PROJECT_DOCUMENTS:
      return {
        ...state,
        isFetching: true
      };
    case RECEIVE_PROJECT_DOCUMENTS:
      const documents = action.payload.data.documents.reduce((mem, cur) => {
        mem[cur.id] = cur;
        return mem;
      }, {});

      const allIds = action.payload.data.documents.map(document => document.id);

      return {
        ...state,
        isFetching: false,
        byId: documents,
        allIds
      };
    default:
      return state;
  }
}
