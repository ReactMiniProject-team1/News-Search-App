import { createSlice } from "@reduxjs/toolkit";
import { DATA } from "../static/dummyData";

const initalState = {
  everyArticles: DATA,
  clippedArticles: [],
  history: [],
  isMainPage: true,
  isLoading: false,
  searchWord: "",
  page: 1,
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
      if (action.payload.favoriteArticle) {
        state.clippedArticles.push(action.payload.favoriteArticle);
      } else if (action.payload.deleteId) {
        state.clippedArticles = state.clippedArticles.filter(
          (article) => article._id !== action.payload.deleteId,
        );
        console.log(state.clippedArticles);
      }
    },
    toggleEveryArticles: (state, action) => {
      state.everyArticles = state.everyArticles.map((each) =>
        each._id === action.payload.id
          ? { ...each, clipped: !each.clipped }
          : each,
      );
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
    setPage: (state, action) => {
      state.page = action.payload.page;
    },
  },
});

export const {
  setEveryArticles,
  setMoreArticles,
  toggleClippedArticles,
  toggleEveryArticles,
  setHistory,
  setSearchWord,
  togglePages,
  toggleIsLoading,
} = articleSlice.actions;

export default articleSlice.reducer;
