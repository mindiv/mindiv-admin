import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CreateCategoryProps } from '../interfaces/category.interface';
import { api } from '../services/api';
import { BASE_URL } from '../utils/constants';

type CategoryState = {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  categories: [];
  category: {
    name: string;
    description: string;
    cover: string;
  };
  error: any;
};

const initialState: CategoryState = {
  status: 'idle',
  categories: [],
  category: {
    name: '',
    description: '',
    cover: '',
  },
  error: null,
};

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

export const getCategories = createAsyncThunk(
  'category/getCategories',
  async (_, thunkAPI) => {
    try {
      const { data } = await api.get(`${BASE_URL}/category`);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getCategory = createAsyncThunk(
  'category/getCategory',
  async (payload: string, thunkAPI) => {
    try {
      const { data } = await api.get(`${BASE_URL}/category/${payload}`);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateCategory = createAsyncThunk(
  'category/updateCategory',
  async (payload: { id: string; payload: CreateCategoryProps }, thunkAPI) => {
    try {
      const { data } = await api.put(
        `${BASE_URL}/category/${payload.id}`,
        payload.payload
      );
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
  extraReducers: (builder) => {
    builder
      .addCase(createCategory.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createCategory.fulfilled, (state) => {
        state.status = 'succeeded';
      })
      .addCase(
        createCategory.rejected,
        (state, action: PayloadAction<unknown>) => {
          state.status = 'failed';
          state.error = action;
        }
      );

    builder
      .addCase(getCategories.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getCategories.fulfilled, (state, action: PayloadAction<any>) => {
        state.status = 'succeeded';
        state.categories = action.payload.payload;
      });

    builder
      .addCase(getCategory.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getCategory.fulfilled, (state, action: PayloadAction<any>) => {
        state.status = 'succeeded';
        state.category = action.payload.payload;
      });
  },
});

export default categorySlice.reducer;
