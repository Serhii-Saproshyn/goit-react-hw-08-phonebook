import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut } from 'redux/auth/operations';

const initialState = {
  user: {
    name: '',
    email: '',
  },
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, { payload: { user, token } }) => {
        state.token = token;
        state.user = user;
      })
      .addCase(logIn.fulfilled, (state, { payload: { user, token } }) => {
        state.token = token;
        state.user = user;
      })
      .addCase(logOut.fulfilled, (state, { payload: { user, token } }) => {
        state.token = token;
        state.user = user;
      });
  },
});

export const authReducer = authSlice.reducer;
