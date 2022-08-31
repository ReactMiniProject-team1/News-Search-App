import styled from "styled-components";
import { BsFillBookmarkFill } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { togglePages } from '../../store/reducer';
import { Link } from 'react-router-dom';

const BookmarkSt = styled.div`
  position: absolute;
  height: 3vh;
  width: 10%;
  top: 2.5rem;
  right: 7%;
  cursor: pointer;

  color: ${(props) => (props.active ? 'red' : 'black')};
`;

const BsFillBookmark = styled.svg`
  width: 100%;
  height: 100%;
`;

export default function Bookmark() {
  const isMainPage = useSelector((state)=>state.articleSlice.isMainPage)
  const dispatch = useDispatch()

  const onClick =() =>{
    dispatch(
      togglePages())
  }

  return (
    <BookmarkSt active = {isMainPage?'':'active'}>
      <Link to={isMainPage?'/clip':'/'}>
      <BsFillBookmarkFill 
        onClick={onClick}
      />
      </Link>

    </BookmarkSt>
  );
}
