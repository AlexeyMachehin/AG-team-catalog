import { ISignupRequestDto } from './../../types/api/ISignupRequestDto';
import { authService } from '@/services/AuthService';
import { userService } from '@/services/userService';
import { IUser } from '@/types/user';
import { createAsyncThunk } from '@reduxjs/toolkit';

type RejectWithValue = { rejectValue: string };

export const getUsers = createAsyncThunk<IUser[], void, RejectWithValue>(
  'users/getUsers',
  async (_, { rejectWithValue }) => {
    try {
      const response = await userService.getUsers();
      return response.data.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue((error as Error).message);
    }
  },
);

export const getUser = createAsyncThunk<IUser, string, RejectWithValue>(
  'users/getUser',
  async (id, { rejectWithValue }) => {
    try {
      return await userService.getUser(id);
    } catch (error) {
      console.log(error);
      return rejectWithValue((error as Error).message);
    }
  },
);

export const signup = createAsyncThunk<
  string,
  ISignupRequestDto,
  RejectWithValue
>('users/signup', async (userData, { rejectWithValue }) => {
  try {
    const response = await authService.signup(userData);
    return response.data.access_token;
  } catch (error) {
    console.log(error);
    return rejectWithValue((error as Error).message);
  }
});
