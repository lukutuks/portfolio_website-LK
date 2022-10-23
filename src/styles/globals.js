import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`


  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

  }

  .Chevron {
    color: #444444;
    transition: 0.5s;
  }
  .Chevron:hover {
    color: #09114d;
    transition: 0.5s;
    }
  
  .slide img {
    width:100%;
    margin: 0 auto;
    @media ${(props) => props.theme.breakpoints.lg} {
    
      width: 28vw;
    }
    @media ${(props) => props.theme.breakpoints.md} {
     
      width: 25vw;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
      width: 25vw;
    }
  }
  
  .slide {
    transform: scale(0.7);
    transition: transform 500ms;
    opacity: 0.25;
  }
  
  .activeSlide {
    transform: scale(1.1);
    opacity: 1;
  }
  
  .arrownext {
    position: absolute;
    cursor: pointer;
    z-index: 10;
    transition: color 300ms;
    right: 0%;
    top: 44%;
    height: 3vw;
    width: 3vw;
  }
  .arrowprev:hover {
    color: #68edff;
  }
  .arrowprev {
    position: absolute;
    cursor: pointer;
    z-index: 10;
    transition: color 300ms;
    left: 0%;
    top: 44%;
    height: 3vw;
    width: 3vw;
  }
  .arrownext:hover {
    color: #68edff;
  }

  .bar-green{
    background-color: rgba(7, 79, 14, 0.25)
  }
  .bar-yellow{
    background-color: rgba(96, 103, 4, 0.25)
  }
  .bar-red{
    background-color: rgba(91, 6, 6, 0.25)
  }
  .circularProgress{
    strokewidth: 25;
  }
 .bar{
  padding: 2px;
  border-radius: 6px;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.25), 0 1px rgba(255, 255, 255, 0.08);
 }
 .barWrapper{
  margin: 8px auto;
  width: 200px;
  text-align: center;
  @media ${(props) => props.theme.breakpoints.lg} {
   width: 20vw;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 18vw;
  }
 }
 .bar2{
  height: 5px;
  border-radius: 30px;
  background-image: 
    linear-gradient(to bottom, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.05));
  transition: 1.2s linear;  
  transition-property: width, background-color; 
  @media ${(props) => props.theme.breakpoints.sm} {
    height: 0.5vw;
   }
 }
 .bar-moved .bar2{
  width: 100%; 
  animation: progressAnimation 6s;
 }
.green{
background-color: #20a31c; 
}
.yellow{
background-color: #d5e809;
}
.red{
background-color: #e81809;
}


  body {
    font-family: ${props => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${props => props.theme.colors.background1};
    color: ${props => props.theme.colors.primary1};
    cursor: default;

  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${props => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }

`;

export default GlobalStyles;