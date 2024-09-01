import React from "react";
import styled from "styled-components";
import {
  HomeRounded,
  CloseRounded,
  LightModeRounded,
  FavoriteRounded,
  LogoutRounded,
  UploadRounded,
  SearchRounded,
} from "@mui/icons-material";
import LogoImage from "../images/Logo.png";
import { Link as MuiLink } from "@mui/material";

const MenuContainer = styled.div`
  flex: 0.5;
  flex-direction: column;
  height: 100vh;
  display: flex;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  // @media (max-width: 1100px) {
  //     position: fixed;
  //     z-index: 1000;
  //     width: 100%;
  //     max-width: 250px;
  //     left: ${({ setMenuOpen }) => (setMenuOpen ? "0" : "-100%")};
  //     transition: 0.3s ease-in-out;
  // }
`;

const Logo = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 6px;
  font-weight: bold;
  font-size: 20px;
  margin: 16px 0px; /* Fixed CSS syntax */
`;

const Image = styled.img`
  height: 40px;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const Close = styled.div`
  display: none;
  @media (max-width: 1100px) {
    display: block;
  }
`;

const Elements = styled.div`
  padding: 4px 16px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  color: ${({ theme }) => theme.text_primary}; /* Ensuring primary text color is applied */
  width: 100%;
  &:hover {
    background-color: ${({ theme }) => theme.text_secondary+50};
  }
`;

const NavText = styled.div`
  padding: 12px 0px;
  text-decoration: none;
`;

const StyledLink = styled(MuiLink)`
  text-decoration: none; /* Ensure no underline */
  color: inherit; /* Inherit color from parent (Elements) */
  width: 100%;
`;
const HR=styled.div`
    width:100%;
    height:1px;
    background-color: ${({ theme }) => theme.text_secondary};
    margin:10px 0px;

`;

const Sidebar = ({setMenuOpen,setDarkMode,darkMode}) => {

  const MenuItems = [
    {
      link: "/",
      name: "Dashboard",
      icon: <HomeRounded />,
    },
    {
      link: "/search",
      name: "Search",
      icon: <SearchRounded />,
    },
    {
      link: "/favourites",
      name: "Favourites",
      icon: <FavoriteRounded />,
    },
  ];
  
  const button = [
    {
      fun: () => console.log("Upload"),
      name: "Upload",
      icon: <UploadRounded />,
    },
    {
      fun: () => setDarkMode(!darkMode),
      name: darkMode? "Light Mode":"Dark Mode",
      icon: <LightModeRounded />,
    },
    {
      fun: () => console.log("Log Out"),
      name: "Log Out",
      icon: <LogoutRounded />,
    },
  ];

  return (
    <MenuContainer>
      <Flex>
        <Logo>
          <Image src={LogoImage} />
          PodCase
        </Logo>
        <Close>
          <CloseRounded />
        </Close>
      </Flex>
      {MenuItems.map((item, index) => (
        <StyledLink to={item.link} key={index} style={{textDecoration:"none"}}>
          <Elements>
            {item.icon}
            <NavText>{item.name}</NavText>
          </Elements>
        </StyledLink>
      ))}
      <HR/>
      {button.map((item) => (
        <Elements onClick={item.fun}>
            {item.icon}
            <NavText>{item.name}</NavText>
        </Elements>
        
      ))}
    </MenuContainer>
  );
};

export default Sidebar;
