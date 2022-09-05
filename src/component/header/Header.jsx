import styled from "styled-components";
import logo from "../../static/logo.png";
import Bookmark from "./BookmarkBtn";
import { Link } from "react-router-dom";

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 12vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
  background-color: #fff;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
`;
const Logo = styled.div`
  width: 100%;
  height: 5vh;
  img {
    width: 100%;
    height: 100%;
  }
`;

const LogoWrap = styled(Link)`
  width: 25%;
  height: 5vh;
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <LogoWrap to={"/"}>
        <Logo>
          <img src={logo} alt="logo" />
        </Logo>
      </LogoWrap>
      <Bookmark />
    </HeaderWrapper>
  );
}
