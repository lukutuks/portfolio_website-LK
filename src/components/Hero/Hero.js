import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { CustomLink } from './HeroStyles';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import ScrollButton from '../ScrollButton/ScrollButton';
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
        MERN Stack / Full-stack Developer
        </SectionText>
        
        <Button>
          <CustomLink href="#contact">Contact Me</CustomLink>
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;