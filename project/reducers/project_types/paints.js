import { RECEIVE_PAINT_PROJECT } from '../../actionTypes';

const initialState = {
  byId: {},
  allIds: [],
  rooms: []
};

export function paints(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_PAINT_PROJECT:
      const [paint] = action.payload.data.projectType.paints;
      const { rooms, ...paintFields } = paint;
      return {
        ...state,
        byId: { ...state.byId, [paint.id]: paintFields },
        allIds: [...state.allIds, paint.id],
        rooms: state.rooms.concat(rooms.map(room => room.id))
      };
    default:
      return state;
  }
}
