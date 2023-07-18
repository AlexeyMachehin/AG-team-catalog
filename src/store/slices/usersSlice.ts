import { IUser } from '@/types/user';
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { getUser, getUsers, signup } from '../thunk/usersThunk';
import { authTokenUtils } from '@/utils/authTokenUtils';

interface IUsersState {
  readonly isLogged: boolean;
  readonly allUsers: readonly IUser[];
  readonly currentUser: IUser | null;
  readonly isLoaderOn: boolean;
  readonly error: string | null | undefined;
  readonly isRedirected: boolean;
  readonly countPages: number | null;
  readonly currentPage: number;
}

const initialState: IUsersState = {
  isLogged: false,
  allUsers: [],
  currentUser: null,
  isLoaderOn: false,
  error: null,
  isRedirected: false,
  countPages: null,
  currentPage: 1,
};

export const usersAdapter = createEntityAdapter<IUser>({
  selectId: user => user.id,
});

const usersSlice = createSlice({
  name: 'users',
  initialState: usersAdapter.getInitialState(initialState),
  reducers: {
    removeError(state) {
      state.error = null;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setIsRedirected(state, action) {
      state.isRedirected = action.payload;
    },
    setIsLogged(state, action) {
      state.isLogged = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getUsers.fulfilled, (state, action) => {
        usersAdapter.setMany(state, action.payload.data);
        state.countPages = action.payload.total_pages;
        state.isLoaderOn = false;
      })
      .addCase(getUsers.pending, state => {
        state.isLoaderOn = true;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoaderOn = false;
      })

      .addCase(getUser.fulfilled, (state, action) => {
        state.currentUser = action.payload;
        state.isLoaderOn = false;
      })
      .addCase(getUser.pending, state => {
        state.isLoaderOn = true;
        state.error = null;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.isRedirected = true;
        state.isLoaderOn = false;
        state.error = action.payload;
      })
      .addCase(signup.fulfilled, (state, action) => {
        authTokenUtils.setToken(action.payload);
        state.isLogged = true;
        state.isLoaderOn = false;
      })
      .addCase(signup.pending, state => {
        state.isLoaderOn = true;
        state.error = null;
      })
      .addCase(signup.rejected, (state, action) => {
        state.isLogged = false;
        state.isLoaderOn = false;
        state.error = action.payload;
      });
  },
});

export const {
  removeError,
  setError,
  setIsRedirected,
  setIsLogged,
  setCurrentPage,
} = usersSlice.actions;

export default usersSlice.reducer;
