import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import loaderReducer from './slices/loaderSlice';

export const createStore = () => {
  return configureStore({
    reducer: {
      userReducer,
      loaderReducer,
    },
  });
};

export const store = createStore();

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
