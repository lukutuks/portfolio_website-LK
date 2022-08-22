import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', paddingBottom:"0px", alignItems: 'center', color:"white" }}>
          <DiCssdeck size="3rem" /> <span>Lukas Krylovas</span>
        </a>
      </Link>
    </Div1>
    <Div2 style={{paddingTop:"10px"}}>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li> 
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>        
             
    </Div2>
      <Div3 >
        <SocialIcons  href="https://google.com"  target="_blank">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/lukas-krylovas" target="_blank">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.instagram.com/lukkutis/" target="_blank">
          <AiFillInstagram size="3rem"/>
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;
