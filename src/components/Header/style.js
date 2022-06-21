import styled from "styled-components";

const HeaderContainer = styled.header`
  width: 100%;
  min-height: 80px;
  background-image: linear-gradient(315deg, #f39f86 0%, #f9d976 74%);
  animation: 1s ease-out 0s 1 slideInFromLeft;

  @keyframes slideInFromLeft {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }
`;

export default HeaderContainer;
