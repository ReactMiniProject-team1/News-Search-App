import styled from "styled-components";
import { BsFillBookmarkFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { togglePages } from "../../store/slices/save";
import { Link } from "react-router-dom";

const BookmarkSt = styled.div`
  position: absolute;
  height: 3vh;
  width: 10%;
  top: 2.5rem;
  right: 7%;
  cursor: pointer;

  color: ${(props) => (props.active ? "black" : "red")};
`;

const BsFillBookmarkFillSt = styled(BsFillBookmarkFill)`
  width: 100%;
  height: 100%;
`;

export default function Bookmark() {
  const { pathname } = window.location;

  return (
    <BookmarkSt active={pathname === "/"}>
      <Link to={pathname === "/" ? "/clip" : "/"}>
        <BsFillBookmarkFillSt />
      </Link>
    </BookmarkSt>
  );
}
