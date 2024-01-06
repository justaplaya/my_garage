import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from './config';

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<string>) {
      state.login = action.payload;
    },
    logout(state) {
      state.login = null;
    },
  },
});

export const AuthActions = authSlice.actions;
