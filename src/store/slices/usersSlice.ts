import { IUser } from '@/types/user';
import { createSlice } from '@reduxjs/toolkit';
import { getUser, getUsers } from '../thunk/usersThunk';

interface IUsersState {
  loggedUser: IUser | null;
  allUsers: IUser[] | null;
  currentUser: IUser | null;
  isLoaderOn: boolean;
  error: string | null | undefined;
  isRedirected: boolean;
}

const initialState: IUsersState = {
  loggedUser: null,
  allUsers: null,
  currentUser: null,
  isLoaderOn: false,
  error: null,
  isRedirected: false,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
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
  },
  extraReducers: builder => {
    builder
      .addCase(getUsers.fulfilled, (state, action) => {
        state.allUsers = action.payload;
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
      });
  },
});

export const { removeError, setError, setIsRedirected } = usersSlice.actions;

export default usersSlice.reducer;
