import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { usersAdapter } from '../slices/usersSlice';

const select = (state: RootState) => state;

export const selectorUsersAdapter = usersAdapter.getSelectors();

export const selectorAllUsers = createSelector(
  (state: RootState) => state.usersReducer,
  selectorUsersAdapter.selectAll,
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

export const selectorIsLogged = createSelector(
  [select],
  state => state.usersReducer.isLogged,
);

export const selectorCountPages = createSelector(
  [select],
  state => state.usersReducer.countPages,
);

export const selectorCurrentPage = createSelector(
  [select],
  state => state.usersReducer.currentPage,
);
