import { authService } from '@/services/AuthService';
import { userService } from '@/services/userService';
import { ISignupRequestDto } from '@/types/ISignupRequestDto';
import { IUser } from '@/types/user';
import { createAsyncThunk } from '@reduxjs/toolkit';

type RejectWithValue = { rejectValue: string };

interface IUsersResponse {
  data: IUser[];
  total_pages: number;
}

export const getUsers = createAsyncThunk<
  IUsersResponse,
  number | undefined,
  RejectWithValue
>('users/getUsers', async (params, { rejectWithValue }) => {
  try {
    const response = await userService.getUsers(params);
    return response.data;
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
    const response = await authService.signup(userData);
    return response.data.access_token;
  } catch (error) {
    console.log(error);
    return rejectWithValue((error as Error).message);
  }
});
