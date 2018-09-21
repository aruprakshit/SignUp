import { RECEIVE_PAINT_PROJECT } from '../../actionTypes';

const initialState = {
  byId: {},
  allIds: []
};

export function rooms(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_PAINT_PROJECT:
      const [paint] = action.payload.data.projectType.paints;
      const { rooms } = paint;
      const newRooms = rooms.reduce((mem, cur) => {
        mem[cur.id] = cur;
        return mem;
      }, {});
      return {
        ...state,
        byId: { ...state.byId, ...newRooms },
        allIds: [...state.allIds, ...rooms.map(room => room.id)]
      };
    default:
      return state;
  }
}
