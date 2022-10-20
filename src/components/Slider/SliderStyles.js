import styled from 'styled-components';

export const Img = styled.img`
  
  width:100%;
  height:100%;
  overflow: hidden;
  padding-top: 2.3vw;
  @media ${(props) => props.theme.breakpoints.lg} {
    font-size:14px;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    font-size:12px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size:10px;
    padding-top: 7vw;
  }
`

export const GridContainer = styled.section`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
padding: 3rem;
place-items: center;
column-gap: 2rem;
row-gap: 3rem;
@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 0;
}

`
export const BlogCard = styled.div`
  border-radius: 10px;
  text-align: center;
  width: 23vw;
  @media ${(props) => props.theme.breakpoints.lg} {
    width: 28vw;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 25vw;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 26vw;
  }

`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
  @media ${(props) => props.theme.breakpoints.lg} {
    font-size:14px;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    font-size:12px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size:10px;
  }
`;


export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: .5rem 0;
  font-size: ${(props) => props.title ? '2.5rem' : '1.6rem'};
  @media ${(props) => props.theme.breakpoints.lg} {
    font-size:16px;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    font-size:14px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size:12px;
  }
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 10px auto;
  border: 0;
  background: #d0bb57;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;


export const CardInfo = styled.p`
  width: 100%;
  padding: 0 40px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 20px;
  text-align: center;
@media ${(props) => props.theme.breakpoints.lg} {
  font-size:14px;
  padding:1rem
}
@media ${(props) => props.theme.breakpoints.md} {
  font-size:12px;
  padding:0.5rem
}
@media ${(props) => props.theme.breakpoints.sm} {
  font-size:2.5vw;
  padding:0.1rem
}

`;


export const UtilityList = styled.ul`
  list-style-type: none;
  padding-bottom: 1.5vw;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
color:#d4c0c0;
font-size: 1.6rem;
padding:1rem 1.5rem;
background: #6b3030;
border-radius: 15px;
transition: 0.5s;
&:hover{
  background: #801414;

}
@media ${(props) => props.theme.breakpoints.lg} {
  font-size:1.4rem;
}
@media ${(props) => props.theme.breakpoints.md} {
  font-size:1.2rem;
}
@media ${(props) => props.theme.breakpoints.sm} {
  font-size:1rem;
}
`;

export const TagList = styled.ul`
display: flex;
justify-content: space-around;
padding: 2rem;
@media ${(props) => props.theme.breakpoints.sm} {
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
}

`
export const Tag = styled.li`
color: #d8bfbf;
font-size: 1.5rem;
@media ${(props) => props.theme.breakpoints.lg} {
  font-size:12px;
}
@media ${(props) => props.theme.breakpoints.md} {
  font-size:10px;
}
@media ${(props) => props.theme.breakpoints.sm} {
  font-size:8px;
}
`