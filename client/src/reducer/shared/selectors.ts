import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../types';

const getTheme = (state: RootState) => state.shared.theme;
const theme = createSelector(getTheme, (theme) => theme);

export const SharedSelectors = { theme };
