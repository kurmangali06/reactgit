
import { Reducer } from 'redux';
import { CHANGE_NAME, TOFFLE_PROFILE } from './actions'
import { ProfileActions } from './types';

export interface ProfileState {
  visible: boolean;
  name: string;
}

const initialState = {
  visible: true,
  name: "default name"
}

export const profileReducer: Reducer<ProfileState, ProfileActions> = (state = initialState, action) => {
  switch (action.type) {
    case TOFFLE_PROFILE: {
      return {
        ...state,
        visible: !state.visible
      };
    }
    case CHANGE_NAME: {
      return {
        ...state,
        name: action.name
      };
    }
    default:
      return state;

  }
}