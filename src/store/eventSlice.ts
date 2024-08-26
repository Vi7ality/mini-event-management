import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface eventState {
  name: string;
  image: string;
  date: string;
  time: string;
  category: string;
  tickets: number;
  price: string;
  description: string;
  id: string;
}

const initialState: eventState = {
  name: '',
  image: '',
  date: '',
  time: '',
  category: '',
  tickets: 1,
  price: '805.00',
  description: 'Officiis tempora sed.',
  id: '1',
};

export const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = eventSlice.actions;

export default eventSlice.reducer;
