import styled from 'styled-components';
import logo from '../../img/logo.png';
import Bookmark from './BookmarkBtn';

const HeaderWrapper = styled.header `
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
  background-color: #fff;
`;
const Logo = styled.div`
  width: 30%;
  height: 60px;
  img {
    width: 100%;
    height: 100%;
  }
`;

export default function Header() {
    return (
      <HeaderWrapper>
        <Logo><img src={logo} alt="logo" /></Logo>
        <Bookmark />
      </HeaderWrapper>
    );
}
