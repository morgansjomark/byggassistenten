import React, {useState} from "react"
import { Link } from "gatsby"
import styled, { css } from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

import Logo from "../images/logo.png";
import Menubar from "../images/bars-solid.svg";

const HeaderWrapper = styled.header`
  background-color: #f7f7f7;
  position: relative;
  z-index: 10;
`;

const HeaderContent = styled.div`
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  max-width: 1024px;
  margin: 0 auto;
  vertical-align: middle; 
  align-items: center;
  img{
    max-width: 150px;
    margin: 0;
    @media (max-width: 768px) {
      display: block;
      margin: 0 auto;
    } 
  }
  @media (max-width: 768px) {
    display: block;
  }
`;

const Menu = styled.div`
  flex: 1;
  text-align: right;
  display: flex;
  flex-direction: row-reverse;
  transition: opacity 0.5s;
  z-index: -1;
  @media (max-width: 768px) {
    position: absolute;
    top: -70px;
    left:0;
    right: 0;
    background-color: rgba(255,255,255,0.9);
    text-align: center;
    display: block;
    padding: 15px 0;
    opacity: 0;
    ${p => p.active && css`
      opacity: 1;
      top: 70px;
    `}
  }
`;

const MenuItem = styled(Link)`
  text-align: center;
  padding: 0 20px;
  box-sizing: border-box;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  color: #000000cc;
  transition: all 0.2s;
  &:hover{
    color: #0056b8;
  }
`;

const MenuToggle = styled.img`
  position: absolute;
  top: 23px;
  right: 25px;
  height: 25px;
  width: 25px;
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

const Header = () => {
  const [open, setOpen] = useState(false)
  return(
  <HeaderWrapper>
    <HeaderContent>
      <Link to="/"><img 
      src={Logo}
      alt="Logo" />
      </Link>
      <MenuToggle onClick={()=>{
        setOpen(!open);
      }} src={Menubar} />
      <Menu active={open} >
        <MenuItem  to={"/#kontakt"}>Kontakt</MenuItem>
        <MenuItem to={"/#tjenester"}>Tjenester</MenuItem>
        <MenuItem to={"/#hjem"}>Hjem</MenuItem>
      </Menu>
    </HeaderContent>
  </HeaderWrapper>
  );
}

export default Header
