import styled from "styled-components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import getNewsData from "../.././static/getNewsData";
import {
  setEveryArticles,
  setHistory,
  setPage,
  setSearchWord,
} from "../../store/reducer";

const InputContainerSt = styled.div`
  position: fixed;
  /* margin-top: 2vh; */
  top: 12vh;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  .searchBar__input {
    align-items: center;
    width: 20rem;
    height: 1.3rem;
    padding: 0.5rem 1.5rem;
    border: 1px solid black;
    border-radius: 2rem;
    position: relative;
  }
  input:focus {
    border: 2px solid rgb(140, 140, 140);
    outline: none;
    font-size: 18px;
  }
`;

let timer;
export default function InputField() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const getArticles = (e) => {
    setValue(e.target.value);

    if (e.target.value === "") return;

    clearTimeout(timer);

    timer = setTimeout(async () => {
      const data = await getNewsData(value, 1);
      dispatch(setPage({ page: 1 }));
      dispatch(setEveryArticles({ data: data }));
      dispatch(setHistory({ word: value }));
      dispatch(setSearchWord({ word: value }));
    }, 500);
  };

  return (
    <InputContainerSt>
      <div className="searchBar">
        <input
          className="searchBar__input"
          type="text"
          value={value}
          onChange={(e) => getArticles(e)}
        />
        <div className="searchBar__icon"></div>
      </div>
    </InputContainerSt>
  );
}
