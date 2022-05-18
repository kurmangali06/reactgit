
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { AUTHOR } from '../../constants';
import { Message, MessageState } from './types';

export interface chatsState {
  [key: string]: MessageState[];
}

const initialState: chatsState = {
  gb: [
    {
      id: '1',
      author: AUTHOR.USER,
      text: 'hello my friend '
    }
  ]
}


const chatsSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {
    addChat(state, action: PayloadAction<{ name: string }>) {
      state[action.payload.name] = [];
    },
    deleteChat(state, action: PayloadAction<{ chatId: string }>) {
      delete state[action.payload.chatId];
    },
    addMessage(state, action: PayloadAction<{ chatId: string, message: Message }>) {
      const { chatId } = action.payload;
      const { text, author } = action.payload.message;
      state[chatId].push({
        id: nanoid(),
        text,
        author
      })
    }
  },
});
let timeout: NodeJS.Timeout;

export const addMessageWithReplay = createAsyncThunk('chats/addMessageWithReplay',
  async ({ chatId, message }: { chatId: string, message: Message }, { dispatch }) => {
    dispatch(addMessage({ chatId, message }));

    if (message.author !== AUTHOR.BOT) {
      if (timeout) {
        clearTimeout(timeout)
      }

      timeout = setTimeout(() => {
        dispatch(addMessage({
          chatId,
          message: {
            text: "Hello I'm bot",
            author: AUTHOR.BOT,
          }
        })
        );
      }, 1000)
    }
  })

export const { addChat, deleteChat, addMessage } = chatsSlice.actions;
export const chatsReducer = chatsSlice.reducer;