import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './slices/usersSlice';

export const createStore = () => {
  return configureStore({
    reducer: {
      usersReducer,
    },
  });
};

export const store = createStore();

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
