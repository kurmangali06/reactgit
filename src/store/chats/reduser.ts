
import { nanoid } from 'nanoid';
import { Reducer } from 'redux';
import { AUTHOR } from '../../constants';
import { ADD_CHAT, ADD_MESSAGE, DELETE_CHAT } from './action';
import { ChatsActions, MessageState } from './types';

export interface ChatsState {
  [key: string]: MessageState[];
}

const initialState: ChatsState = {
  gb: [
    {
      id: '1',
      author: AUTHOR.USER,
      text: 'hello my friend '
    }
  ]
}

export const chatReducer: Reducer<any, ChatsActions> = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHAT: {
      return {
        ...state,
        [action.chatName]: []
      };
    }
    case DELETE_CHAT: {
      const chats = { ...state };
      delete chats[action.chatId];
      return chats;
    }
    case ADD_MESSAGE: {
      return {
        ...state,
        [action.chatId]: [
          ...state[action.chatId],
          {
            id: nanoid(),
            author: action.message.author,
            text: action.message.text,

          }
        ]
      };
    }
    default:
      return state;


  }
}