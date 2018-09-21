import { RECEIVE_COUNTERTOP_PROJECT } from '../../actionTypes';

const initialState = {
  byId: {},
  allIds: []
};

export function edgeProfiles(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_COUNTERTOP_PROJECT:
      const [countertop] = action.payload.data.projectType.countertops;
      const { edgeProfiles } = countertop;
      const newEdgeProfiles = edgeProfiles.reduce((mem, cur) => {
        mem[cur.id] = cur;
        return mem;
      }, {});
      return {
        ...state,
        byId: { ...state.byId, ...newEdgeProfiles },
        allIds: state.allIds.concat(
          edgeProfiles.map(edgeProfile => edgeProfile.id)
        )
      };
    default:
      return state;
  }
}
