import { configureStore } from '@reduxjs/toolkit';
import userSlice  from '../pages/Login/UserSlice';
import counterReducer from '../reducers/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user:userSlice
  },
});
