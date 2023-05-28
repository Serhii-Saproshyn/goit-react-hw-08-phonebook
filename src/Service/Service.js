import axios from 'axios';

export const API = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});
