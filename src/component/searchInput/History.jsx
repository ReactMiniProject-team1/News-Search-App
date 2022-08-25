import React, { useState } from "react";
import styled from "styled-components";

const HistoryContainerST = styled.div`
  .keyword-wrap {
    display: none;
    position: absolute;
    top: 50px;
    width: 85%;
    background-color: #fff;
    margin-top: 0.5rem;
    padding: 0.5rem 1.5rem 1rem;
    box-shadow: 1px 1px 5px #ccc;
  }
  .keyword-top {
    width: 100%;
    display: flex;
  }
  span {
    line-height: 1.5;
    padding-left: 0.5rem;
    font-size: 16px;
  }
  li {
    padding: 0.5rem 0.5rem 0rem;
    padding-right: 1rem;
    border-bottom: 1px solid black;
    overflow: hidden;
  }
  .hr {
    width: 100%;
    height: 0.3rem;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
    margin-top: 1.5rem;
  }
`

export default function History() {
  <HistoryContainerST>
    <div className="keyword-wrap">
      <div className="keyword-top">
        <li></li>
      </div>
      <hr />
    </div>
  </HistoryContainerST>
}
