import React, { useState } from "react";
import styled, { useTheme } from "styled-components";
import { Link, Link as LinkR } from "react-router-dom";
import { DiCssdeck } from "react-icons/di";
import { FaBars } from "react-icons/fa";
import { Bio } from "../../data/constants";

const Nav = styled.div`
 background-color: ${({ theme }) => theme.white};
 height: 80px;
 display: flex;
 justify-content: center;
 align-items: center;
 font-size: 1rem;
 position: sticky;
 top: 0;
 z-index: 10;
 @media screen and (max-width: 960px) {
  transition: 0.8s all ease;
 }
`;

const NavContainer = styled.div`
 background-color: ${({ theme }) => theme.card_light};
 display: flex;
 justify-content: space-between;
 height: 60px;
 z-index: 1;
 width: 100%;
 padding: 0 24px;
 max-width: 1200px;
`;

const NavLogo = styled(LinkR)`
 width: 80%;
 padding: 0 6px;
 display: flex;
 justify-self: flex-start;
 cursor: pointer;
 text-decoration: none;
 align-items: center;
 @media screen and (max-width: 640px) {
  padding: 0 0px;
 }
`;

const MobileIcon = styled.div`
 display: none;
 @media screen and (max-width: 768px) {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-100%, 50%);
  font-size: 1.5rem;
  cursor: pointer;
  color: ${({ theme }) => theme.text_primary};
 }
`;

const NavLink = styled.a`
 color: ${({ theme }) => theme.text_primary};
 font-weight: 500;
 cursor: pointer;
 text-decoration: none;
 transition: all 0.2s ease-in-out;
 &:hover {
  color: ${({ theme }) => theme.primary};
 }
`;

const ButtonContainer = styled.div`
 width: 80%;
 height: 100%;
 display: flex;
 justify-content: end;
 align-items: center;
 padding: 0 6px;
 @media screen and (max-width: 768px) {
  display: none;
 }
`;

const GithubButton = styled.button`
 background-color: transparent;
 color: ${({ theme }) => theme.primary};
 border: 1.8px solid ${({ theme }) => theme.primary};
 border-radius: 20px;
 display: flex;
 justify-content: center;
 align-items: center;
 padding: 0px 20px;
 font-size: 1rem;
 font-weight: 500;
 cursor: pointer;
 height: 70%;
 &:hover {
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.white};
 }

 @media screen and (max-width: 640px) {
  font-size: 0.8rem;
 }
`;

const NavItems = styled.ul`
 background-color: ${({ theme }) => theme.white};
 width: 100%;
 display: flex;
 justify-content: center;
 align-items: center;
 gap: 32px;
 list-style: none;

 @media screen and (max-width: 768px) {
  display: none;
 }
`;

const Span = styled.span`
 padding: 0 4px;
 font-weight: bold;
 font-size: 18px;
 color: black;
`;

const MobileMenu = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 gap: 16px;
 position: absolute;
 margin-top: 80px;
 right: 0;
 width: 100%;
 padding: 12px 40px 24px 40px;
 background-color: ${({ theme }) => theme.white + 99};
 transition: all 0.3 ease-in-out;
 transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
 border-radius: 0 0 0 20px;
 box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
 opacity: ${({ open }) => (open ? "1" : "0")};
 z-index: ${({ open }) => (open ? "1" : "-1")};
`;

const MobileMenuLinks = styled(LinkR)`
 color: ${({ theme }) => theme.text_primary};
 font-weight: 500;
 cursor: pointer;
 text-decoration: none;
 transition: all 0.2s ease-in-out;
 &:hover {
  color: ${({ theme }) => theme.primary};
 }
`;

const Navbar = () => {
 const [isOpen, setIsOpen] = useState(false);
 const theme = useTheme();

 return (
  <Nav>
   <NavContainer>
    <NavLogo>
     {/* <a
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              marginBottom: "20",
              cursor: "pointer",
            }}
          > */}
     <DiCssdeck
      size="3rem"
      color="black"
     />
     <Span>My Portfolio</Span>
     {/* </a> */}
    </NavLogo>
    <MobileIcon>
     <FaBars
      onClick={() => {
       setIsOpen(!isOpen);
      }}
     />
    </MobileIcon>
    <NavItems>
     <NavLink>Home</NavLink>
     <NavLink>Skills</NavLink>
     <NavLink>Experience</NavLink>
     <NavLink>Projects</NavLink>
     <NavLink>Education</NavLink>
    </NavItems>

    {isOpen && (
     <MobileMenu open={isOpen}>
      <MobileMenuLinks
       href="#home"
       onClick={() => {
        setIsOpen(!isOpen);
       }}
      >
       Home
      </MobileMenuLinks>

      <MobileMenuLinks
       href="#about"
       onClick={() => {
        setIsOpen(!isOpen);
       }}
      >
       Skills
      </MobileMenuLinks>

      <MobileMenuLinks
       href="#about"
       onClick={() => {
        setIsOpen(!isOpen);
       }}
      >
       Experience
      </MobileMenuLinks>

      <MobileMenuLinks
       href="#about"
       onClick={() => {
        setIsOpen(!isOpen);
       }}
      >
       Projects
      </MobileMenuLinks>

      <MobileMenuLinks
       href="#about"
       onClick={() => {
        setIsOpen(!isOpen);
       }}
      >
       Education
      </MobileMenuLinks>
      <Link to={Bio.github}>
       <GithubButton
        style={{
         padding: "10px 16px",
         background: `${theme.primary}`,
         color: "white",
         width: "max-content",
         cursor: "pointer",
        }}
       >
        Github Profile
       </GithubButton>
      </Link>
     </MobileMenu>
    )}
    <ButtonContainer>
     <Link
      to={Bio.github}
      style={{
       width: "100%",
       height: "100%",
       display: "flex",
       justifyContent: "end",
       alignItems: "center",
       textDecoration: "none",
      }}
     >
      <GithubButton>Github Profile</GithubButton>
     </Link>
    </ButtonContainer>
   </NavContainer>
  </Nav>
 );
};

export default Navbar;
