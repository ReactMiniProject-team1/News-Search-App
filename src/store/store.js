import { configureStore } from "@reduxjs/toolkit";
import localStorageMiddleware from "./localStorageiddleware.js";
import articleSlice from "./reducer.js";

// const reHydrateStore = () => {
//   if (localStorage.getItem("articles") !== undefined) {
//     return JSON.parse(localStorage.getItem("articles"));
//   }
// };

export const store = configureStore({
  reducer: {
    articleSlice: articleSlice,
  },
  // preloadedState: reHydrateStore(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});
