import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

const select = (state: RootState) => state;

export const selectorAllUsers = createSelector(
  [select],
  state => state.usersReducer.allUsers,
);

export const selectorLoader = createSelector(
  [select],
  state => state.usersReducer.isLoaderOn,
);

export const selectorError = createSelector(
  [select],
  state => state.usersReducer.error,
);

export const selectorCurrentUser = createSelector(
  [select],
  state => state.usersReducer.currentUser,
);

export const selectorIsRedirected = createSelector(
  [select],
  state => state.usersReducer.isRedirected,
);
