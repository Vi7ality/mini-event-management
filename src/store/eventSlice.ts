import { createSlice } from '@reduxjs/toolkit';
import { eventType } from '../services/types';
import { AxiosError } from 'axios';
import { fetchEvents } from './operations';

export interface iEventState {
  data: eventType[];
  isLoading: boolean;
  error: AxiosError | null;
}

const initialState: iEventState = {
  data: [],
  isLoading: false,
  error: null,
};

const handlePending = (state: iEventState) => {
  state.isLoading = true;
};
const handleRejected = (state: iEventState, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const eventsSlice = createSlice({
  name: 'events',
  initialState,
  extraReducers: {
    [fetchEvents.pending]: handlePending,
    [fetchEvents.rejected]: handleRejected,
    [fetchEvents.fulfilled](state, action) {
      state.isLoading: false;
      state.error = null;
      state.data = action.payload;
    }
  },
});

export const eventsReducer = eventsSlice.actions;

export default eventsSlice.reducer;
