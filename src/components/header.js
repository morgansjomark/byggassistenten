import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

import Logo from "../images/logo.png";

const HeaderWrapper = styled.header`
  background-color: #f7f7f7;
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
  @media (max-width: 768px) {
    display: block;
    margin-top: 20px;
    text-align: center;
  }
`;

const MenuItem = styled(Link)`
  text-align: center;
  padding: 0 20px;
  box-sizing: border-box;
  color: #0056b8;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
`;

const Header = () => (
  <HeaderWrapper>
    <HeaderContent>
      <Link to="/"><img 
      src={Logo}
      alt="Logo" />
      </Link>
      <Menu>
        <MenuItem to={"/#kontakt"}>Kontakt</MenuItem>
        <MenuItem to={"/#tjenester"}>Tjenester</MenuItem>
        <MenuItem to={"/#hjem"}>Hjem</MenuItem>
      </Menu>
    </HeaderContent>
  </HeaderWrapper>
)

export default Header
