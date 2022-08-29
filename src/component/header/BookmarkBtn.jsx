import styled from "styled-components";
import { BsFillBookmarkFill } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { togglePages } from '../../store/reducer';
import { Link } from 'react-router-dom';

const BookmarkSt = styled.div`
  position: absolute;
  top: 2.5rem;
  right: 7%;
  cursor: pointer;
  .active{
    color: red;
  }
`;

export default function Bookmark() {
  const isMainPage = useSelector((state)=>state.articleSlice.isMainPage)
  const dispatch = useDispatch()

  const onClick =() =>{
    dispatch(
      togglePages())
  }

 
  
  console.log(isMainPage)

  return (
    <BookmarkSt>
      <Link to={isMainPage?'/clip':'/'}>
      <BsFillBookmarkFill 
        className={isMainPage?'':'active'} 
        onClick={ onClick}
        
      />
      </Link>

    </BookmarkSt>
  );
}
