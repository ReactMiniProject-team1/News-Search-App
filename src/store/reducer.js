import { createSlice } from "@reduxjs/toolkit";
import { DUMMY_DATA } from "../static/dummyData";

const initalState = {
  everyArticles: DUMMY_DATA,
  clippedArticles: [],
  history: [],
  isMainPage: true,
  isLoading: false,
  searchWord: "",
};

export const articleSlice = createSlice({
  name: "articleHandler",
  initialState: initalState,
  reducers: {
    setEveryArticles: (state, action) => {
      state.everyArticles = action.payload.data;
    },
    setMoreArticles: (state, action) => {
      state.everyArticles.concat(action.payload.data);
    },
    toggleClippedArticles: (state, action) => {
      //이거 되려나..?
      const id = action.payload.id;
      const chosen = state.everyArticles.find((each) => each._id === id);
      if (!chosen.clipped) {
        state.clippedArticles.push({ ...chosen, clipped: true });
        state.everyArticles.map((each) =>
          each._id === id ? { ...each, clipped: true } : each
        );
      } else {
        state.clippedArticles = state.clippedArticles.filter(
          (each) => each._id !== id
        );
      }
    },
    setHistory: (state, action) => {
      const word = action.payload.word;
      if (state.history.includes(word)) {
        const index = state.history.indexOf(word);
        state.history.splice(index, 1);
      }
      if (state.history.length > 5) {
        state.history.shift();
      }
      state.history.push(word);
    },
    setSearchWord: (state, action) => {
      state.searchWord = action.payload.word;
    },
    togglePages: (state) => {
      state.isMainPage = !state.isMainPage;
    },
    toggleIsLoading: (state, action) => {
      state.isLoading = action.payload.boolean;
    },
  },
});

export const {
  setEveryArticles,
  setMoreArticles,
  toggleClippedArticles,
  setHistory,
  setSearchWord,
  togglePages,
  toggleIsLoading,
} = articleSlice.actions;

export default articleSlice.reducer;
