import styled from "styled-components";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import getNewsData from "../.././static/getNewsData";
import { setEveryArticles, setHistory } from "../../store/slices/save";
import {
  toggleIsLoading,
  setSearchWord,
  setPage,
} from "../../store/slices/unsave";
const InputContainerSt = styled.div`
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
  };

  useEffect(() => {
    if (value === "") return;
    clearTimeout(timer);

    timer = setTimeout(async () => {
      dispatch(toggleIsLoading({ state: true }));

      const data = await getNewsData(value, 1);

      dispatch(setSearchWord({ word: value }));
      dispatch(setPage({ page: 1 }));
      dispatch(setEveryArticles({ data: data }));
      dispatch(setHistory({ word: value }));
      dispatch(toggleIsLoading({ state: false }));
    }, 500);
  }, [value]);

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
