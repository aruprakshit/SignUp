import {
  REQUEST_PROJECT,
  RECEIVE_PROJECT,
  RECEIVE_PROJECT_DOCUMENTS,
  READ_QUESTIONS_SUCCEEDED,
  CREATE_BIDS_SUCCEEDED
} from '../actionTypes';

const initialState = {
  isFetching: false,
  byId: {},
  allIds: []
};

function addBid(state = {}, action) {
  const {
    project: { id: projectId }
  } = action.payload.data;

  const { bid } = action.payload.data;
  const prevBids = state[projectId].bids || [];

  return {
    ...state,
    [projectId]: {
      ...state[projectId],
      bids: [...prevBids, bid.id]
    }
  };
}

function addDocuments(state = [], action) {
  const { id: projectId } = action.payload.data.project;
  return {
    ...state,
    byId: {
      ...state.byId,
      [projectId]: {
        ...state.byId[projectId],
        documents: action.payload.data.documents.map(document => document.id)
      }
    }
  };
}

function addQuestions(state = {}, action) {
  const { id: projectId } = action.payload.data.project;
  return {
    ...state,
    [projectId]: {
      ...state[projectId],
      questions: action.payload.data.questions.map(question => question.id)
    }
  };
}

export function projects(state = initialState, action) {
  switch (action.type) {
    case REQUEST_PROJECT:
      return {
        ...state,
        isFetching: true
      };
    case RECEIVE_PROJECT:
      const { project } = action.payload.data;
      return {
        ...state,
        isFetching: false,
        byId: { ...state.byId, [project.id]: project },
        allIds: [...state.allIds, project.id]
      };
    case RECEIVE_PROJECT_DOCUMENTS:
      return addDocuments(state, action);
    case READ_QUESTIONS_SUCCEEDED:
      return { ...state, byId: addQuestions(state.byId, action) };
    case CREATE_BIDS_SUCCEEDED:
      return { ...state, byId: addBid(state.byId, action) };
    default:
      return state;
  }
}
