import styled from "styled-components";

const StyledLi = styled.li`
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: black;
  gap: 8px;
  max-height: 320px;

  h2 {
      font-size: 20px;
      color: white;
  }

  span{
      color: #f2a03d;
  }

  img {
    object-fit: cover;
    max-width: 250px;
    height: 200px;
  }

  button {
    width: 100px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;
    transition: 1s;
    color: #f25c05;
    background: #f2cdac;
    border-radius: 4px;

    :hover {
      transition: 1.5s;
      background: #f2a03d;
      color: whitesmoke;
    }
  }
`;

export default StyledLi;
