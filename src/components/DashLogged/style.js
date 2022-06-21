import styled from "styled-components";

export const H1Styled = styled.h1`
  font-size: 28px;
  font-weight: 600;
  color: #a62103;
  padding-top: 10px;
  padding-left: 10px;
`;

export const Container = styled.div`
  text-align: right;
  padding-right: 10px;

  p {
    font-weight: 600;
    color: #D9310B;
  }

  span {
      cursor: pointer;
      color: #a62103;
  }

  @media(min-width: 968px){
    font-size: 20px;
  }
`;

export const StyledTitle = styled.h1`
  text-align: center;
  padding-top: 30px;
  font-size: 25px;
  color: #F27405;

  @media(min-width: 968px){
    font-size: 35px;
  }
`

export const StyledImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  position: absolute;
  right: 5%;
  top: 90%;
  transition: 1.5s;

  :hover{
    transition: 1.5s;
    width: 70px;
    height: 70px;
  }
`
