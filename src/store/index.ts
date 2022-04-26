import { compose, createStore } from 'redux';
import { profileReducer } from './profile/reduser';

export const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(profileReducer, composeEnhancers());