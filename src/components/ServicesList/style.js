import styled from "styled-components";

const StyledUl = styled.ul`
    display: flex;
    overflow-x: scroll;
    animation: 1s ease-out 0s 1 slideInFromLeft;
    padding-top: 100px;
    gap: 10px;
    margin-left: 10px;
    height: 410px;

  @keyframes slideInFromLeft {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }

  @media (min-width: 968px){
    overflow: unset;
    flex-wrap: wrap;
    justify-content: center;
    height: 750px;
  }
`;

export default StyledUl;
