import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const initalState = {
  everyArticles: {},
  clippedArticles: {},
  history: [],
};

export const saveSlice = createSlice({
  name: "save",
  initialState: initalState,
  reducers: {
    setEveryArticles: (state, action) => {
      const data = action.payload.data;
      Object.keys(data).forEach(([key, value]) => {
        if (state.clippedArticles[key]) {
          data[key] = { ...value, clipped: true };
        }
      });
      state.everyArticles = data;
    },
    setMoreArticles: (state, action) => {
      Object.entries(action.payload.data).forEach(([key, value]) => {
        if (state.clippedArticles[key]) {
          state.everyArticles[key] = { ...value, clipped: true };
        } else {
          state.everyArticles[key] = value;
        }
      });
    },
    toggleClippedArticles: (state, action) => {
      const chosen = action.payload.chosen;
      const id = chosen.id;

      if (!chosen.clipped) {
        state.clippedArticles[id] = { ...chosen, clipped: true };
        state.everyArticles[id].clipped = true;
      } else {
        delete state.clippedArticles[id];
        if (state.everyArticles[id]) {
          state.everyArticles[id].clipped = false;
        }
      }
    },
    setHistory: (state, action) => {
      const word = action.payload.word;
      if (state.history.includes(word)) {
        state.history = state.history.filter((each) => each !== word);
      }
      if (state.history.length >= 5) {
        state.history.pop();
      }
      state.history.unshift(word);
    },
    deleteHistory: (state, action) => {
      const word = action.payload.word;
      state.history = state.history.filter((each) => each !== word);
    },
  },
});

const persistConfig = {
  key: "clippedArticles/History",
  storage,
  whitelist: ["clippedArticles", "history"],
};

const saveReducer = persistReducer(persistConfig, saveSlice.reducer);

export const {
  setEveryArticles,
  setMoreArticles,
  toggleClippedArticles,
  setHistory,
  deleteHistory,
} = saveSlice.actions;

export default saveReducer;
