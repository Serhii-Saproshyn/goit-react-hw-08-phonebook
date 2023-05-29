import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// const API = axios.create({
//   baseURL: 'https://connections-api.herokuapp.com',
// });

export const getContactsThunk = createAsyncThunk(
  'contacts',
  async (_, thunkAPI) => {
    const {
      auth: { token },
    } = thunkAPI.getState();
    if (!token) {
      return [];
    }

    const { data } = await axios.get('/contacts');
    return data;
  }
);

export const deleteContactsThunk = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    const { data } = await axios.delete(`/contacts/${id}`);
    return data;
  }
);
export const addContactsThunk = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    const { data } = await axios.post('/contacts', { ...contact });
    return data;
  }
);
