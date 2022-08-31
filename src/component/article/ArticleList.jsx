import styled from "styled-components";
import ArticleItem from "./ArticleItem";
import { useSelector } from "react-redux";
import { IoIosArrowUp } from "react-icons/io";

/* CSS */
const ArticleSecion = styled.article`
  display: grid;
  margin-top: 1.5rem;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: 1fr;
  line-height: 1.2;
`;
const EmptyArticleText = styled.h2`
  color: #999;
  margin-top: 10%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;
const HrStyle = styled.div`
  width: 100%;
  height: 10px;
  margin-top: 40px;
  border-top: 3px solid black;
  border-bottom: 3px solid black;
`;
const ScrollTopBtn = styled.button`
  position: fixed;
  bottom: 4vh;
  right: 4vh;
  width: 8vh;
  height: 8vh;
  border-radius: 50%;
  background-color: #000;
  opacity: 0.9;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  &:hover {
    transform: scale(1.1);
    animation: transform 0.5s ease;
  }
`;
const ScrollTopIcon = styled(IoIosArrowUp)`
  color: #fff;
  font-size: 25px;
`;

export default function ArticleList() {
  const { everyArticles, clippedArticles, isMainPage } = useSelector(
    (state) => state,
  );
  console.log(everyArticles, clippedArticles);
  const articles =
    (isMainPage ? everyArticles : clippedArticles).length === 0 ? (
      <EmptyArticleText>There are no articles.</EmptyArticleText>
    ) : (
      (isMainPage ? everyArticles : clippedArticles).map((article) => (
        <ArticleItem key={article.id} article={article} />
      ))
    );

  const scollTopHandler = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main>
      <HrStyle />
      <ArticleSecion>{articles}</ArticleSecion>
      <ScrollTopBtn onClick={scollTopHandler}>
        <ScrollTopIcon />
      </ScrollTopBtn>
    </main>
  );
}
