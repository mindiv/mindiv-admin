import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/authSlice';
import appReducer from '../features/appSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    app: appReducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
