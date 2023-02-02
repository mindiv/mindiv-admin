import { createSlice } from '@reduxjs/toolkit';
import { getFromLS, setToLS } from '../utils/storage';

interface AppState {
  mode: string;
}

const initialState: AppState = {
  mode: 'light',
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setThemeMode(state, action) {
      state.mode = action.payload;
      setToLS('mode', action.payload);
    },

    getThemeModeFromStorage(state) {
      const mode = getFromLS('mode');
      if (mode) {
        state.mode = mode;
      } else {
        setToLS('mode', 'light');
      }
    },
  },
});

export const { setThemeMode, getThemeModeFromStorage } = appSlice.actions;
export default appSlice.reducer;
