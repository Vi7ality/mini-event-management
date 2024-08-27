import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { eventApi } from '../services/events';

export const store = configureStore({
  reducer: {
    [eventApi.reducerPath]: eventApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(eventApi.middleware),
});

setupListeners(store.dispatch);
