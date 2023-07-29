import { createSlice } from '@reduxjs/toolkit';
import { GarageStateType } from './types';

const initialState: GarageStateType = { G: 59 };

export const garageSlice = createSlice({
  name: 'garage',
  initialState,
  reducers: {},
});
