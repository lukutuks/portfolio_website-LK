import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { CustomLink } from './HeroStyles';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';



 


const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi, <br />
          I'm Lukas,<br />
          JavaScript developer.
        </SectionTitle>
        <SectionText>
        React.js / Junior Front End Developer
        </SectionText>
          <CustomLink href="#contact"><Button>Contact Me</Button></CustomLink>
      </LeftSection>
    </Section>
  </>
);

export default Hero;