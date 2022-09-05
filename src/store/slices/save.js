import { createSlice } from "@reduxjs/toolkit";

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
      const keys = Object.keys(data);
      for (const key of keys) {
        if (state.clippedArticles[key]) {
          data[key] = { ...data[key], clipped: true };
        }
      }
      state.everyArticles = data;
    },
    setMoreArticles: (state, action) => {
      const data = action.payload.data;
      const keys = Object.keys(data);
      for (const key of keys) {
        if (state.clippedArticles[key]) {
          data[key] = { ...data[key], clipped: true };
        }
      }
      state.everyArticles = { ...state.everyArticles, ...data };
    },
    toggleClippedArticles: (state, action) => {
      const chosen = action.payload.chosen;
      const id = chosen.id;

      if (!chosen.clipped) {
        state.clippedArticles = {
          ...state.clippedArticles,
          [id]: { ...chosen, clipped: true },
        };
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

export const {
  setEveryArticles,
  setMoreArticles,
  toggleClippedArticles,
  setHistory,
  deleteHistory,
} = saveSlice.actions;

export default saveSlice.reducer;
