import React from "react";
import styled from "styled-components";
import { BiTimeFive } from "react-icons/bi";
import { GrFormClose } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { deleteHistory } from "../../store/slices/save";
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
  margin-top: 0.3rem;
  font-size: 16px;
`;

const IconSt = styled.div`
  margin-left: 0.2rem;
  display: flex;
  align-items: center;
`;

const KeywordListSt = styled.li`
  overflow: hidden;
  padding: 0.5rem 0rem 0rem;
  border-bottom: 1px solid black;
  font-size: 18px;
  font-weight: 400;
  display: flex;
  justify-content: space-between;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const KeywordSpan = styled.div`
  width: 90%;
  overflow: hidden;
`;
const DeleteHistory = styled.button`
  font-size: 20px;
  width: 10%;
`;

export default function History(props) {
  const history = useSelector((state) => state.save.history);
  const dispatch = useDispatch();

  const deleteKeyword = (e) => {
    const word = e.currentTarget.parentNode.parentNode.firstChild.innerText;
    dispatch(deleteHistory({ word: word }));
  };
  return (
    <HistoryContainerSt
      onMouseOver={props.onShowHistory}
      onMouseOut={props.onHideHistory}
    >
      <HistoryTitleContainerSt>
        <TitleSt>Recent Keyword</TitleSt>
        <IconSt>
          <BiTimeFive />
        </IconSt>
      </HistoryTitleContainerSt>
      <ul>
        {history.map((keyword) => (
          <KeywordListSt key={keyword}>
            <KeywordSpan>{keyword}</KeywordSpan>
            <DeleteHistory>
              <GrFormClose onClick={deleteKeyword} />
            </DeleteHistory>
          </KeywordListSt>
        ))}
      </ul>
    </HistoryContainerSt>
  );
}
