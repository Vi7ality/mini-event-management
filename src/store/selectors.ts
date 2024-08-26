import { stateType } from '../services/types';

export const selectEvents = (state: stateType) => state.events.data;

export const selectIsLoading = (state: stateType) => state.events.isLoading;

export const selectError = (state: stateType) => state.events.error;
