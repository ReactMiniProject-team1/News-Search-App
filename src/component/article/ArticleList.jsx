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
`;
const HrStyle = styled.div`
  width: 100%;
  height: 10px;
  margin-top: 40px;
  border-top: 3px solid black;
  border-bottom: 3px solid black;
`;

export default function ArticleList() {
  const everyArticles = useSelector(
    (state) => state.articleSlice.everyArticles,
  );
  const articles = everyArticles.map((article) => (
    <ArticleItem
      key={article._id}
      id={article._id}
      title={article.headline.main}
      content={article.snippet}
      date={article.pub_date}
    />
  ));
  return (
    <ArticleWrapper>
      <HrStyle />
      <article>{articles}</article>
    </ArticleWrapper>
  );
}
