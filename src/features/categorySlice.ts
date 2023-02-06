import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CreateCategoryProps } from '../interfaces/category.interface';
import { api } from '../services/api';
import { BASE_URL } from '../utils/constants';

interface CategoryState {}

const initialState: CategoryState = {};

export const createCategory = createAsyncThunk(
  'category/createCategory',
  async (payload: CreateCategoryProps, thunkAPI) => {
    try {
      const { data } = await api.post(`${BASE_URL}/category`, payload);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: {},
});

export default categorySlice.reducer;
