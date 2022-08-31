import React from "react";
import Header from "../component/header/Header";
import ArticleList from "../component/article/ArticleList";
import { useDispatch } from "react-redux";
import { togglePages } from "../store/slices/save";

export default function ClippedPage() {
  const dispatch = useDispatch();
  dispatch(togglePages({ state: false }));
  return (
    <>
      <Header />
      <ArticleList />
    </>
  );
}
