import { createSlice } from "@reduxjs/toolkit";

const initalState = {
  isLoading: false,
  searchWord: "",
  page: 1,
};

export const unsaveSlice = createSlice({
  name: "unsave",
  initialState: initalState,
  reducers: {
    setSearchWord: (state, action) => {
      state.searchWord = action.payload.word;
    },
    toggleIsLoading: (state, action) => {
      state.isLoading = action.payload.state;
    },
    setPage: (state, action) => {
      state.page = action.payload.page;
    },
  },
});

export const { setSearchWord, toggleIsLoading, setPage } = unsaveSlice.actions;

export default unsaveSlice.reducer;
