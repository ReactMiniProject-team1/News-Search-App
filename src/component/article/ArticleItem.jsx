import styled from 'styled-components';
import ArticleList from './ArticleList';

const ArticleItemSt = styled.li`
  margin: 1rem;
  padding-right: 1rem;
  border-right: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &:nth-child(3n) {
    border: none;
  }
`;

const ArticleHeaderSt = styled.header`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  h2 {
    overflow: hidden;
    font-weight: bold;
    font-size: 23px;
  }
  button {
    color: #525252;
    display: flex;
    font-size: 25px;
    &.active {
      color: #ffd056;
    }
  }
`;

const ArticleBodySt = styled.div`
  p {
    overflow: hidden;
    margin-top: 0.3rem;
    font-size: 15px;
  }
  span {
    font-size: 14px;
    font-weight: 500;
    color: #8e8e8e;
    margin-top: 0.3rem;
  }
`;

const ArticleItem = () => {
  return (
    <ArticleItemSt>
      <ArticleHeaderSt>
        <h2>title</h2>
        <button>icon</button>
      </ArticleHeaderSt>
      <ArticleBodySt>
        <p>content</p>
        <span>date</span>
      </ArticleBodySt>
    </ArticleItemSt>
  );
};

export default ArticleItem;
