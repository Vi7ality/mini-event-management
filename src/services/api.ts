const API_URL = 'https://66c98b018a477f50dc30ec28.mockapi.io';

import axios, { AxiosInstance } from 'axios';

const api: AxiosInstance = axios.create({
  baseURL: API_URL,
});

export const getEventList = api.get('/events');
