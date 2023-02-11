import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/authSlice';
import appReducer from '../features/appSlice';
import userReducer from '../features/userSlice';
import categoryReducer from '../features/categorySlice';
import statReducer from '../features/statSlice';
import questionReducer from '../features/questionSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    app: appReducer,
    user: userReducer,
    stat: statReducer,
    category: categoryReducer,
    question: questionReducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
