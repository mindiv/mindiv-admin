import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  QuestionData,
  QuestionPostPayload,
} from '../interfaces/question.interface';
import { api } from '../services/api';
import { BASE_URL } from '../utils/constants';

type CategoryState = {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  questions: [];
  question: QuestionData;
  error: any;
  info: any;
};

const initialState: CategoryState = {
  status: 'idle',
  questions: [],
  question: {
    _id: '',
    question: '',
    options: [],
    difficulty: 'easy',
    correctOption: 0,
    answer: '',
    category: '',
    description: '',
  },
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

export const getQuestion = createAsyncThunk(
  'question/getQuestion',
  async (payload: string, thunkAPI) => {
    try {
      const { data } = await api.get(`${BASE_URL}/question/${payload}`);
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

export const updateQuestion = createAsyncThunk(
  'question/updateQuestion',
  async (payload: { id: string; payload: QuestionPostPayload }, thunkAPI) => {
    try {
      const { data } = await api.put(
        `${BASE_URL}/question/${payload.id}`,
        payload.payload
      );
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteQuestion = createAsyncThunk(
  'question/deleteQuestion',
  async (payload: string, thunkAPI) => {
    try {
      const { data } = await api.delete(`${BASE_URL}/question/${payload}`);
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
      .addCase(getQuestion.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getQuestion.fulfilled, (state, action: PayloadAction<any>) => {
        state.status = 'succeeded';
        state.question = action.payload.payload;
      });

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

    builder
      .addCase(updateQuestion.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(
        updateQuestion.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.status = 'succeeded';
          console.log('UPDATE', action.payload);
        }
      )
      .addCase(updateQuestion.rejected, (state, action) => {
        console.log(action);
      });

    builder
      .addCase(deleteQuestion.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(
        deleteQuestion.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.status = 'succeeded';
          console.log('DEL', action.payload);
        }
      )
      .addCase(deleteQuestion.rejected, (state, action) => {
        console.log(action);
      });
  },
});

export default questionSlice.reducer;
