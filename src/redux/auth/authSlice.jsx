import { createSlice } from '@reduxjs/toolkit';
import { register } from 'redux/auth/operations';

const initialState = {
  user: {
    name: '',
    mail: '',
  },
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: builder => {
    builder.addCase(
      register.fulfilled,
      (state, { payload: { user, token } }) => {
        console.log(user, token);
        state.token = token;
        state.user = user;
      }
    );
  },
});

export const authReducer = authSlice.reducer;
