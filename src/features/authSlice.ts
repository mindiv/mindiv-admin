import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { api } from '../services/api';
import { BASE_URL } from '../utils/constants';
import { getFromLS, setToLS } from '../utils/storage';

type AuthState = {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  isAuth: boolean;
  errors: unknown;
};

const initialState: AuthState = {
  status: 'idle',
  isAuth: false,
  errors: null,
};

export const authenticateAdmin = createAsyncThunk(
  'auth/registerUser',
  async (payload: { email: string; passowrd: string }, thunkAPI) => {
    try {
      const data = await api.post(`${BASE_URL}/auth`, payload);
      return data.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    getAuthTokenFromStorage(state) {
      const token = getFromLS('access-token');
      if (token) {
        state.isAuth = true;
      } else {
        state.isAuth = false;
      }
    },
    clearAuthTokenFromStorage() {
      localStorage.removeItem('access-token');
      localStorage.removeItem('refresh-token');
      location.reload();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authenticateAdmin.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(
        authenticateAdmin.fulfilled,
        (
          state,
          action: PayloadAction<{ accessToken: string; refreshToken: string }>
        ) => {
          state.status = 'succeeded';
          setToLS('access-token', action.payload.accessToken);
          setToLS('refresh-token', action.payload.refreshToken);
          location.reload();
        }
      )
      .addCase(
        authenticateAdmin.rejected,
        (state, action: PayloadAction<unknown>) => {
          state.status = 'failed';
          state.errors = action;
        }
      );
  },
});

export const { getAuthTokenFromStorage, clearAuthTokenFromStorage } =
  authSlice.actions;
export default authSlice.reducer;
