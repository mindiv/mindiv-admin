import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { api } from '../services/api';
import { BASE_URL } from '../utils/constants';

type StatState = {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  stats: {
    users: number;
    categories: number;
    questions: number;
  };
};

const initialState: StatState = {
  status: 'idle',
  stats: {
    users: 0,
    categories: 0,
    questions: 0,
  },
};

export const getStats = createAsyncThunk(
  'stat/getStats',
  async (_, thunkAPI) => {
    try {
      const { data } = await api.get(`${BASE_URL}/stats`);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const statSlice = createSlice({
  name: 'stat',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getStats.pending, (state) => {
        state.status = 'idle';
      })
      .addCase(getStats.fulfilled, (state, action: PayloadAction<any>) => {
        state.status = 'succeeded';
        state.stats = action.payload.payload;
      });
  },
});

export default statSlice.reducer;
