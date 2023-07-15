import { createSlice } from '@reduxjs/toolkit';
export type GarageStateType = { G: 59 };
const initialState: GarageStateType = { G: 59 };

export const garageSlice = createSlice({
  name: 'garage',
  initialState,
  reducers: {},
});
