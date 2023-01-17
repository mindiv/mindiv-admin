import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../services/api';
import { BASE_URL } from '../utils/constants';

const initialState = {
  user: null,
};

export const registerUserAsync = createAsyncThunk(
  'auth/registerUser',
  async (payload, thunkAPI) => {
    try {
      const { data } = await api.post(`${BASE_URL}/user`, payload);
      console.log(data);
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
  extraReducers: {},
});

export default authSlice.reducer;
