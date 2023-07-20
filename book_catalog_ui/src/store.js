import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import SignInReducer from '../src/pages/SignInPage/slices/SignInSlice';
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: {
    signIn: SignInReducer,
  },
  middleware:[sagaMiddleware]
});
export default store;