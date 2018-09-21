import { RECEIVE_COUNTERTOP_PROJECT } from '../../actionTypes';

const initialState = {
  byId: {},
  allIds: [],
  materialColors: [],
  edgeProfiles: []
};

export function countertops(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_COUNTERTOP_PROJECT:
      const [countertop] = action.payload.data.projectType.countertops;
      const { edgeProfiles, materialColors, ...countertopFields } = countertop;
      return {
        ...state,
        byId: { ...state.byId, [countertop.id]: countertopFields },
        allIds: [...state.allIds, countertop.id],
        edgeProfiles: state.edgeProfiles.concat(
          edgeProfiles.map(edgeProfile => edgeProfile.id)
        ),
        materialColors: state.materialColors.concat(
          materialColors.map(materialColor => materialColor.id)
        )
      };
    default:
      return state;
  }
}
