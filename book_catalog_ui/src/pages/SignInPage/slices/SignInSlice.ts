/* eslint-disable @typescript-eslint/no-empty-function */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  user: '',
};

export const userSlice = createSlice({
  name: 'signIn',
  initialState,
  reducers: {
    registerUserAction: (state, action) => {},
    loginUserAction: (state, action) => {},
    logOutUserAction: () => {},
    saveUserAction: (state, action) => {
      state.user = action.payload;
    },
    refreshFunction:()=>{},
  },
});

// Action creators are generated for each case reducer function
export const { 
  registerUserAction,
  loginUserAction,
  logOutUserAction,
  saveUserAction,
  refreshFunction } = userSlice.actions;
export const selectUser = (state:any) => state.userReducer.user;
export default userSlice.reducer;