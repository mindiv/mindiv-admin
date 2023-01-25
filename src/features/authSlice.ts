import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../services/api';
import { BASE_URL } from '../utils/constants';
import { getFromLS, setToLS } from '../utils/storage';

type AuthState = {
  user: any;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  isAuth: boolean;
};

const initialState: AuthState = {
  user: null,
  status: 'idle',
  isAuth: false,
};

export const authenticateAdmin = createAsyncThunk(
  'auth/registerUser',
  async (payload: { email: string; passowrd: string }, thunkAPI) => {
    try {
      const { data } = await api.post(`${BASE_URL}/auth`, payload);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    getAuthTokenFromStorage(state) {
      const token = getFromLS('token')?.accessToken;
      if (token) {
        state.isAuth = true;
      } else {
        state.isAuth = false;
      }
    },
    clearAuthTokenFromStorage() {
      localStorage.removeItem('token');
      location.reload();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authenticateAdmin.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(authenticateAdmin.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
        setToLS('token', action.payload);
        location.reload();
      })
      .addCase(authenticateAdmin.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { getAuthTokenFromStorage, clearAuthTokenFromStorage } =
  authSlice.actions;
export default authSlice.reducer;
