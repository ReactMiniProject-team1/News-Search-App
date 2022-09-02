import React from "react";
import styled from "styled-components";
import { BiTimeFive } from "react-icons/bi";
import { useSelector } from "react-redux";

const HistoryContainerSt = styled.div`
  width: 20rem;
  background-color: #fff;
  margin-top: 0.5rem;
  padding: 0.5rem 1.5rem 1rem;
  box-shadow: 1px 1px 5px #ccc;
`;

const HistoryTitleContainerSt = styled.div`
  width: 100%;
  display: flex;
`;

const TitleSt = styled.span`
  line-height: 1.5;
  padding-left: 0.5rem;
  font-size: 16px;
`;

const IconSt = styled.div`
  margin-left: 0.2rem;
  display: flex;
  align-items: center;
`;

const KeywordListSt = styled.li`
  overflow: hidden;
  padding: 0.5rem 0.5rem 0rem;
  padding-right: 1rem;
  border-bottom: 1px solid black;
  font-size: 18px;
  font-weight: 400;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export default function History() {
  const history = useSelector((state) => state.save.history);

  return (
    <HistoryContainerSt>
      <HistoryTitleContainerSt>
        <TitleSt>Recent Keyword</TitleSt>
        <IconSt>
          <BiTimeFive />
        </IconSt>
      </HistoryTitleContainerSt>
      <ul>
        {history.map((keyword) => (
          <KeywordListSt key={keyword}>{keyword}</KeywordListSt>
        ))}
      </ul>
    </HistoryContainerSt>
  );
}
