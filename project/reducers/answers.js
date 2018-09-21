import { READ_QUESTIONS_SUCCEEDED } from '../actionTypes';

const initialState = {
  isFetching: false,
  byId: {},
  allIds: []
};

export function answers(state = initialState, action) {
  switch (action.type) {
    case READ_QUESTIONS_SUCCEEDED:
      const answersPayload = action.payload.data.questions.reduce(
        (mem, cur) => {
          const { answers, ...rest } = cur;
          return mem.concat(answers);
        },
        []
      );

      const allIds = answersPayload.map(answer => answer.id);
      const byId = answersPayload.reduce((mem, cur) => {
        mem[cur.id] = cur;
        return mem;
      }, {});

      return {
        ...state,
        isFetching: false,
        byId,
        allIds
      };
    default:
      return state;
  }
}
