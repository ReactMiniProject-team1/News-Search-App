import styled from "styled-components";
import ArticleItem from "./ArticleItem";
import { useSelector } from "react-redux";

/* CSS */
const ArticleWrapper = styled.main`
  article {
    display: grid;
    margin-top: 1.5rem;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: 1fr;
    line-height: 1.2;
  }
  h2 {
    color: #999;
    margin-top: 10%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`;
const HrStyle = styled.div`
  width: 100%;
  height: 10px;
  margin-top: 40px;
  border-top: 3px solid black;
  border-bottom: 3px solid black;
`;

export default function ArticleList() {
  const { everyArticles, clippedArticles, isMainPage } = useSelector(
    ({ articleSlice }) => articleSlice,
  );

  const articles =
    (isMainPage ? everyArticles : clippedArticles).length === 0 ? (
      <h2>There are no articles.</h2>
    ) : (
      (isMainPage ? everyArticles : clippedArticles).map((article) => (
        <ArticleItem key={article.id} {...article} />
      ))
    );

  return (
    <ArticleWrapper>
      <HrStyle />
      <article>{articles}</article>
    </ArticleWrapper>
  );
}
