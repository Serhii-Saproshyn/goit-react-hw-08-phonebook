import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const {
        data: { token, user },
      } = await axios.post('/users/signup', credentials);
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;

      return { token, user };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/logIn',
  async (credentials, thunkAPI) => {
    try {
      const {
        data: { token, user },
      } = await axios.post('/users/login', credentials);
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;

      return { token, user };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logOut',
  async (credentials, thunkAPI) => {
    try {
      const {
        data: { token, user },
      } = await axios.post('/users/logout', credentials);
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;

      return { token, user };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
