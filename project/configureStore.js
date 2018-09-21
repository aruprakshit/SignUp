import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { batchDispatchMiddleware } from 'redux-batched-actions';

import rootReducer from './reducers';
import { authToken } from '../helpers/authToken';

export default function configureStore(preloadedState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(
      applyMiddleware(
        thunkMiddleware.withExtraArgument({ authToken: authToken() }),
        batchDispatchMiddleware
      )
    )
  );
}
