import { combineReducers } from 'redux';
import { projects } from '../reducers/projects';
import { documents } from '../reducers/documents';
import { questions } from '../reducers/questions';
import { answers } from '../reducers/answers';
import { bids } from '../reducers/bids';
import projectType from './project_types';

export default combineReducers({
  projects,
  documents,
  questions,
  answers,
  bids,
  projectType
});
