import { compose, createStore, combineReducers } from 'redux';
import { chatReducer, ChatsState } from './chats/reduser';
import { profileReducer, ProfileState } from './profile/reduser';

export const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export interface StoreState {
  profile: ProfileState,
  chats: ChatsState
}

export const store = createStore(
  combineReducers<StoreState>({
    profile: profileReducer,
    chats: chatReducer,
  }),
  composeEnhancers()
);