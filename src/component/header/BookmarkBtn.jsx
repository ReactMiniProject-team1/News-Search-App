import styled from 'styled-components';
import { BsFillBookmarkFill } from 'react-icons/fa';

  const Bookmark = styled.div`
    position: absolute;
    top: 2.5rem;
    right: 7%;
  `;

  export default function Bookmark() {
    return(
        <Bookmark>
            <BsFillBookmarkFill />
        </Bookmark>
    )

  }