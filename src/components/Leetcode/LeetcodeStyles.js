import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  height: 25vw;

  @media ${props => props.theme.breakpoints.md} {
    background-image: none;
    padding: 0;
    margin-top: 16px;
  }
   @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    width: 100%;
    height: 60vw;
  }
`;

export const Dashboard = styled.div`
  height: 15vw;
  width: 450px;
  background-color: #131313;
  background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.86' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");
  border-radius: 20px;
  display: grid; 
  grid-template-columns: 30% 40% 30%; 
  grid-template-rows: 11% 70% 19%; 
  gap: 0px 0px; 
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  @media ${(props) => props.theme.breakpoints.lg} {
    width: 40vw;
    height: 20vw;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 60vw;
    height: 35vw;
  }
`;
export const Top = styled.div`
grid-area: 1 / 1 / 2 / 4;
align-self: center;
justify-self: center;
padding-top: 15px;

`;
export const Title = styled.h1`
font-size: 14px;
@media ${(props) => props.theme.breakpoints.md} {
  font-size: 10px;
  margin-bottom: 15px;
}
@media ${(props) => props.theme.breakpoints.sm} {
  font-size: 7px;
  margin-bottom: 20px;
  margin-top 15px;
}
`;
export const Left = styled.div`
grid-area: 2 / 1 / 3 / 2;
align-self: center;
justify-self: center;

`;
export const Right = styled.div`
grid-area: 2 / 2 / 3 / 4;
align-self: center;
justify-self: center;
margin-top: 30px;

@media ${(props) => props.theme.breakpoints.sm} {
 margin-top: 20px;
}

`;
export const Chart = styled.div`
  height: 90px;
  width: 90px;
  @media ${(props) => props.theme.breakpoints.lg} {
    height: 10vw;
  width: 10vw;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    height: 8vw;
  width: 8vw;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    height: 6vw;
  width: 6vw;
  }
`;
export const Row = styled.div`

@media ${(props) => props.theme.breakpoints.md} {
font-size: 2vw;
}
@media ${(props) => props.theme.breakpoints.sm} {
  font-size: 1.8vw;
}
`
