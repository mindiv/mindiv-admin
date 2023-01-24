import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../services/api';
import { BASE_URL } from '../utils/constants';

type AuthState = {
  user: any;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
};

const initialState: AuthState = {
  user: null,
  status: 'idle',
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
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(authenticateAdmin.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(authenticateAdmin.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(authenticateAdmin.rejected, (state, action) => {
        state.status = 'failed';
      });
  },
});

export const {} = authSlice.actions;
export default authSlice.reducer;
