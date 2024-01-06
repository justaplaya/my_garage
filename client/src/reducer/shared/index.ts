import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './config';

export const sharedSlice = createSlice({
  name: 'shared',
  initialState,
  reducers: {
    changeTheme(state) {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
    },
  },
});

export const SharedActions = sharedSlice.actions;
