import { batchActions } from 'redux-batched-actions';

import {
  REQUEST_PROJECT,
  RECEIVE_PROJECT,
  RECEIVE_PAINT_PROJECT,
  RECEIVE_ELECTRICAL_PROJECT,
  RECEIVE_COUNTERTOP_PROJECT
} from '../actionTypes';
import { fetchProjectApi } from '../../lib/api/projects';

function requestProject() {
  return {
    type: REQUEST_PROJECT,
    payload: {}
  };
}

function receiveProject(data) {
  return {
    type: RECEIVE_PROJECT,
    payload: { data }
  };
}

function receivePaintProject(data) {
  return {
    type: RECEIVE_PAINT_PROJECT,
    payload: { data }
  };
}

function receiveCountertopsProject(data) {
  return {
    type: RECEIVE_COUNTERTOP_PROJECT,
    payload: { data }
  };
}

function receiveElectricalProject(data) {
  return {
    type: RECEIVE_ELECTRICAL_PROJECT,
    payload: { data }
  };
}

function composeActions(dispatch, data) {
  const { projectType } = data.project;
  switch (projectType) {
    case 'paint':
      return [
        dispatch(receiveProject(data)),
        dispatch(receivePaintProject(data))
      ];
    case 'electrical':
      return [
        dispatch(receiveProject(data)),
        dispatch(receiveElectricalProject(data))
      ];
    case 'countertops':
      return [
        dispatch(receiveProject(data)),
        dispatch(receiveCountertopsProject(data))
      ];
    default:
      return [dispatch(receiveProject(data))];
  }
}

export function fetchProject(postId) {
  return (dispatch, getState, params) => {
    dispatch(requestProject());
    return fetchProjectApi(
      postId,
      { authToken: params.authToken },
      data => {
        batchActions(composeActions(dispatch, data));
      },
      error => {
        console.log(error);
      }
    );
  };
}
