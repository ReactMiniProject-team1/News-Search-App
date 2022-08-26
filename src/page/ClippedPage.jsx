import React from "react";
import Header from "../component/header/Header";
import ArticleList from "../component/article/ArticleList";
import { store } from "../store/store";
import { Provider } from "react-redux";

export default function ClippedPage() {
  return (
    <Provider store={store}>
      <Header />
      <ArticleList />
    </Provider>
  );
}
