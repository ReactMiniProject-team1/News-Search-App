import React, { useState } from "react";
import styled from "styled-components";

const InputContainerST = styled.div`
  display: flex;
  justify-content: center;
  align-item: center;

  .searchBar__input {
    align-item: center;
    width: 20rem;
    height: 1.3rem;
    padding: 0.5rem 1.5rem;
    border: border: 1px solid black;
    border-radius: 2rem;
    position: relative;
  }
  input:focus {
    border: 2px solid rgb(140, 140, 140);
    outline: none;
    font-size: 18px;
  }
`

export default function InputField() {
  
  const [ value, setValue ] = useState("");

  const onChangeInput = (e) => {
    setValue(e.target.value)
  }; 
  const onKeyDownInput = (e) => {
    if (e.nativeEvent.isComposing) {
      return;
    } 
    if (e.key === 'Enter') {
      setTimeout(() => {
        console.log(e.target.value);
        setValue('');
      }, 500)
    }
  };

  return (
    <InputContainerST>
      <div className="searchBar">
        <input 
          className="searchBar__input" 
          onKeyDown={ onKeyDownInput } 
          onChange={ onChangeInput }
          value={ value } 
          type="text"  
        />
        <div className="searchBar__icon"></div>
      </div>
    </InputContainerST>
  );
}