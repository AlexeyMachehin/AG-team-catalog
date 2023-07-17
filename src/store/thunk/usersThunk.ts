import { authService } from '@/services/AuthService';
import { userService } from '@/services/userService';
import { ISignupRequestDto } from '@/types/ISignupRequestDto';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IUser } from '@/types/user';

type RejectWithValue = { rejectValue: string };

export interface IUsersResponse {
  readonly data: IUser[];
  readonly total_pages: number;
}

export const getUsers = createAsyncThunk<
  IUsersResponse,
  number | undefined,
  RejectWithValue
>('users/getUsers', async (params, { rejectWithValue }) => {
  try {
    const response = await userService.getUsers(params);
    return response;
  } catch (error) {
    console.log(error);
    return rejectWithValue((error as Error).message);
  }
});

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
    return await authService.signup(userData);
  } catch (error) {
    console.log(error);
    return rejectWithValue((error as Error).message);
  }
});
