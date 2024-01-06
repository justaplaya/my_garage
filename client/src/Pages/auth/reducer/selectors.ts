import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'reducer/types';

const getLogin = (state: RootState) => state.auth.login;
const login = createSelector(getLogin, (login) => login);

export const AuthSelectors = { login };
