import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setEveryArticles, setHistory, setPage, setSearchWord } from "../../store/reducer";
import { getNewsData } from "../.././static/getNewsData";
// import { DATA } from "../.././static/dummyData";

const SearchContainerSt = styled.div`
  display: flex;
  align-items: center;
  width: 20rem;
  height: 1.3rem;
  padding: 0.5rem 1.5rem;
  border: 1px solid black;
  border-radius: 2rem;
  margin: 0 auto;
`

const SearchInputSt = styled.input`
  flex: 1;
  padding: 10px 20px;
  font-size: normal;
  border: none;

  &:focus {
  border: 2px solid rgb(140, 140, 140);
  outline-width: 0;
  outline: none;
  font-size: 18px;
  }
`

export default function InputField() {

  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  let timeOut;

  const onSubmit = (e) => {
    e.preventDefault();
  }

  const onChange = (e) => {
    if (!e.target.value) {
      return;
    } else {
      clearTimeout(timeOut);

      timeOut = setTimeout(async () => {
        // const data = await DATA( value, 1);
        const data = await getNewsData( value, 1 );
        dispatch(setPage({ page: 1 }));
        dispatch(setEveryArticles({ data: data }));
        dispatch(setHistory({ word: value }));
        dispatch(setSearchWord({ word: value }));
      }, 500);
      setValue(e.target.value);
    }
  };

  const onFocus = () => { 
    setValue('');
  }

  return (
    <SearchContainerSt>
      <form onSubmit={ onSubmit }>
        <SearchInputSt>
          <input 
            type="text"
            value={value}
            onChange={ onChange }
            onFocus={ onFocus }
          />
          <FaSearch size="20px" color="lightgrey"/>
        </SearchInputSt>
      </form>
    </SearchContainerSt>
  );
  
};