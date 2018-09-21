import { RECEIVE_ELECTRICAL_PROJECT } from '../../actionTypes';

const initialState = {
  byId: {},
  allIds: []
};

export function electricals(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_ELECTRICAL_PROJECT:
      const [electrical] = action.payload.data.projectType.electricals;
      return {
        ...state,
        byId: { ...state.byId, [electrical.id]: electrical },
        allIds: [...state.allIds, electrical.id]
      };
    default:
      return state;
  }
}
