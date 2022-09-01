import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getNewsData } from "../.././static/getNewsData";
// import { History } from "../.././static/History";
import { setEveryArticles, setHistory } from "../../store/slices/save";
import {
  toggleIsLoading,
  setSearchWord,
  setPage,
} from "../../store/slices/unsave";

const SearchFormSt = styled.form`
  position: fixed;
  top: 12vh;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

const SearchBarSt = styled.div`
  position: relative;
  align-items: center;
 `
 
const InputSt = styled.input`
  align-items: center;
  width: 20rem;
  height: 1.3rem;
  padding: 0.5rem 3.5rem 0.5rem 2rem;
  border: 1px solid black;
  border-radius: 2rem;

  &:hover {
    background-color: #f6f6f6;
    border: 2px solid black;
  }

  &:focus {
    border: 2px solid rgb(140, 140, 140);
    outline: none;
    font-size: 18px;
  }
 `
const IconSt = styled.div`
  position: absolute;
  top: 0.65rem;
  right: 1.5rem;
`

let timer;
export default function InputField() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const getArticle = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    if (!value) return;
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <SearchFormSt>
      <SearchBarSt>
        <InputSt
          className="searchBar__input"
          type="text"
          value={ value }
          onChange={ (e) => getArticle(e) }
        />
        <IconSt>
          <FaSearch />
        </IconSt>
      </SearchBarSt>
    </SearchFormSt>

  );
};