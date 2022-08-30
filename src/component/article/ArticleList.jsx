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
  const everyArticles = useSelector(
    (state) => state.articleSlice.everyArticles,
  );
  const clippedArticles = useSelector(
    (state) => state.articleSlice.clippedArticles,
  );
  const isMainPage = useSelector((state) => state.articleSlice.isMainPage);

  const articles = !isMainPage ? (
    // 북마크 활성화
    clippedArticles.length !== 0 ? (
      clippedArticles.map((article) => (
        <ArticleItem
          key={article.id}
          id={article.id}
          title={article.title}
          content={article.content}
          date={article.date}
          url={article.url}
          clipped={article.clipped}
        />
      ))
    ) : (
      <h2> There are no articles clipped.</h2>
    )
  ) : (
    // 북마크 비활성화
    everyArticles.map((article) => (
      <ArticleItem
        key={article.id}
        id={article.id}
        title={article.title}
        content={article.content}
        date={article.date}
        url={article.url}
        clipped={article.clipped}
      />
    ))
  );

  return (
    <ArticleWrapper>
      <HrStyle />
      <article>{articles}</article>
    </ArticleWrapper>
  );
}
