import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { eventType } from './types';

const API_URL = 'https://66c98b018a477f50dc30ec28.mockapi.io/api';

export const eventApi = createApi({
  reducerPath: 'events',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: builder => ({
    getAllEvents: builder.query<eventType[], void>({
      query: () => `events`,
    }),
    getEvent: builder.query<eventType, string>({
      query: id => `events/${id}`,
    }),
    updateEvent: builder.mutation<
      eventType,
      Partial<eventType> & { id: string }
    >({
      query: ({ id, ...patch }) => ({
        url: `events/${id}`,
        method: 'PUT',
        body: patch,
      }),
    }),
    createEvent: builder.mutation<eventType, Partial<eventType>>({
      query: newEvent => ({
        url: `events`,
        method: 'POST',
        body: newEvent,
      }),
    }),
  }),
});

export const {
  useGetAllEventsQuery,
  useGetEventQuery,
  useUpdateEventMutation,
  useCreateEventMutation,
} = eventApi;
