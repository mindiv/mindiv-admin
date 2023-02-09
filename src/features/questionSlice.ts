import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { QuestionPostPayload } from '../interfaces/question.interface';
import { api } from '../services/api';
import { BASE_URL } from '../utils/constants';

type CategoryState = {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  questions: [];
  error: any;
  info: any;
};

const initialState: CategoryState = {
  status: 'idle',
  questions: [],
  error: null,
  info: null,
};

export const getQuestions = createAsyncThunk(
  'question/getQuestions',
  async (_, thunkAPI) => {
    try {
      const { data } = await api.get(`${BASE_URL}/question`);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const createQuestion = createAsyncThunk(
  'question/createQuestion',
  async (payload: QuestionPostPayload, thunkAPI) => {
    try {
      const { data } = await api.post(`${BASE_URL}/question`, payload);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const questionSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getQuestions.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getQuestions.fulfilled, (state, action: PayloadAction<any>) => {
        state.status = 'succeeded';
        state.questions = action.payload.payload.questions;
        state.info = action.payload.payload.pageInfo;
      })
      .addCase(
        getQuestions.rejected,
        (state, action: PayloadAction<unknown>) => {
          state.status = 'failed';
          state.error = action;
        }
      );

    builder
      .addCase(createQuestion.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(
        createQuestion.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.status = 'succeeded';
        }
      );
  },
});

export default questionSlice.reducer;
