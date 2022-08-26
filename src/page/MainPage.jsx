import React from "react";
import InputField from "../component/searchInput/InputField";
import Header from "../component/header/Header";
import ArticleList from "../component/article/ArticleList";
import { store } from "../store/store";
import { Provider } from "react-redux/es/exports";

export default function MainPage() {
  return (
    <Provider store={store}>
      <Header />
      <InputField />
      <ArticleList />
    </Provider>
  );
}
