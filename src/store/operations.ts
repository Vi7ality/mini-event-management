import { createAsyncThunk } from '@reduxjs/toolkit';
import { getEventList } from '../services/api';

export const fetchEvents = createAsyncThunk(
  'events/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await getEventList;
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
