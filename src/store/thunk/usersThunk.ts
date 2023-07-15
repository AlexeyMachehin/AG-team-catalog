import { userService } from '@/services/userService';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getUsers = createAsyncThunk(
  'users/getUsers',
  async function (_, { rejectWithValue }) {
    try {
      const response = await userService.getUsers();

      return response.data.data;
    } catch (error: any) {
      console.log(error);

      return rejectWithValue(error.message);
    }
  },
);

export const getUser = createAsyncThunk(
  'users/getUser',
  async function (id: string, { rejectWithValue }) {
    try {
      return await userService.getUser(id);
    } catch (error: any) {
      console.log(error);

      return rejectWithValue(error.message);
    }
  },
);
