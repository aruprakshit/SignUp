import {
  READ_QUESTIONS_PENDING,
  READ_QUESTIONS_SUCCEEDED
} from '../actionTypes';

const initialState = {
  isFetching: false,
  byId: {},
  allIds: []
};

export function questions(state = initialState, action) {
  switch (action.type) {
    case READ_QUESTIONS_PENDING:
      return {
        ...state,
        isFetching: true
      };
    case READ_QUESTIONS_SUCCEEDED:
      const questions = action.payload.data.questions.reduce((mem, cur) => {
        const { answers, ...rest } = cur;
        mem[cur.id] = rest;
        mem[cur.id]['answers'] = answers.map(answer => answer.id);
        return mem;
      }, {});

      const allIds = action.payload.data.questions.map(question => question.id);

      return {
        ...state,
        isFetching: false,
        byId: questions,
        allIds
      };
    default:
      return state;
  }
}
