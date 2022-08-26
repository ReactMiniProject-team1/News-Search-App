import styled from "styled-components";
import ArticleItem from "./ArticleItem";
import { useSelector } from "react-redux";

/* CSS */
const ArticleWrapper = styled.main`
  article {
    display: grid;
    margin-top: 3rem;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: 1fr;
    line-height: 1.2;
  }
`;

export default function ArticleList() {
  const everyArticles = useSelector(
    (state) => state.articleSlice.everyArticles
  );
  const articles = everyArticles.map((article) => (
    <ArticleItem
      key={article.id}
      title={article.title}
      content={article.content}
      date={article.date}
    />
  ));
  return (
    <ArticleWrapper>
      <article>{articles}</article>
    </ArticleWrapper>
  );
}
