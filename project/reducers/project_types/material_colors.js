import { RECEIVE_COUNTERTOP_PROJECT } from '../../actionTypes';

const initialState = {
  byId: {},
  allIds: []
};

export function materialColors(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_COUNTERTOP_PROJECT:
      const [countertop] = action.payload.data.projectType.countertops;
      const { materialColors } = countertop;
      const newMaterialColors = materialColors.reduce((mem, cur) => {
        mem[cur.id] = cur;
        return mem;
      }, {});
      return {
        ...state,
        byId: { ...state.byId, ...newMaterialColors },
        allIds: state.allIds.concat(
          materialColors.map(materialColor => materialColor.id)
        )
      };
    default:
      return state;
  }
}
