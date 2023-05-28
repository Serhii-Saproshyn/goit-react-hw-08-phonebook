import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshToken } from 'redux/auth/operations';

const initialState = {
  user: {
    name: '',
    email: '',
  },
  token: null,
  isLoading: false,
  error: null,
};

function isPendingAction(action) {
  return action.type.endsWith('/pending');
}

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
      .addCase(logOut.fulfilled, (state, payload) => {
        state.token = initialState.token;
        state.user = initialState.user;
      })
      .addCase(refreshToken.fulfilled, (state, { payload: user }) => {
        state.user = user;
      })

      .addMatcher(isPendingAction, (state, action) => {
        state[action.meta.requestId] = 'pending';
        state.isLoading = true;
      })

      .addMatcher(
        action => action.type.endsWith('/rejected'),
        (state, action) => {
          state[action.meta.requestId] = 'rejected';
          state.isLoading = false;
          state.error = action.payload;
        }
      )

      .addMatcher(
        action => action.type.endsWith('/fulfilled'),
        (state, action) => {
          state[action.meta.requestId] = 'fulfilled';
          state.isLoading = false;
        }
      );
  },
});

export const authReducer = authSlice.reducer;
