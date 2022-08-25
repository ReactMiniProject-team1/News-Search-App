import styled from "styled-components";

const ArticleList = () => {
  const ArticleWrapper = styled.main`
    margin: 200px 0% 3% 2%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: 1fr;
    line-height: 1.2;
  `;
  return <ArticleWrapper></ArticleWrapper>;
};

export default ArticleList;
