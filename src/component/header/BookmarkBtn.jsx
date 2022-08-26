import styled from "styled-components";
import { BsFillBookmarkFill } from "react-icons/bs";

const BookmarkSt = styled.div`
  position: absolute;
  top: 2.5rem;
  right: 7%;
`;

export default function Bookmark() {
  return (
    <BookmarkSt>
      <BsFillBookmarkFill />
    </BookmarkSt>
  );
}
