import styled from "styled-components";
import { BsFillBookmarkFill } from "react-icons/bs";

const BookmarkSt = styled.div`
  position: absolute;
  height: 3vh;
  width: 10%;
  top: 2.5rem;
  right: 7%;
  cursor: pointer;
  svg {
    width: 100%;
    height: 100%;
  }
`;

export default function Bookmark() {
  return (
    <BookmarkSt>
      <BsFillBookmarkFill />
    </BookmarkSt>
  );
}
