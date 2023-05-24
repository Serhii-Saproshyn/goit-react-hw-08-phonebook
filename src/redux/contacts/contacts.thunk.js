import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API = axios.create({
  baseURL: 'https://646a7db97d3c1cae4ce29c5f.mockapi.io/contacts/',
});

export const getContactsThunk = createAsyncThunk('contacts', async () => {
  const { data } = await API.get('/contacts');
  return data;
});

export const deleteContactsThunk = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    const { data } = await API.delete(`/contacts/${id}`);
    return data;
  }
);
export const addContactsThunk = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    const { data } = await API.post('/contacts', { ...contact });
    return data;
  }
);
