import styled from "styled-components";

export const H1Styled = styled.h1`
    font-size: 28px;
    font-weight: 600;
    color: #A62103;
    padding-top: 10px;
    padding-left: 10px;
`

export const PStyled = styled.p`
  font-weight: 600;
  text-align: right;
  padding-top: 10px;
  padding-right: 10px;
  color: #A62103;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding-top: 50px;
  animation: 1s ease-out 0s 1 slideInFromLeft;

  @keyframes slideInFromLeft {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: center;
    border: 3px solid #f2cdac;
    border-radius: 4px;
    color: #f2cdac;
    background: black;
    width: 90%;
    max-width: 600px;
    min-height: 420px;

    h1{
        align-self: center;
        font-size: 30px;
        color: #F25C05;
    }
        
    label {
      font-size: 20px;
      padding-left: 10%;
    }

    input {
      width: 80%;
      height: 33px;
      border-radius: 4px;
      align-self: center;
      outline: none;
      padding: 5px;
    }

    button {
      background: #f2cdac;
      height: 30px;
      width: 100px;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      align-self: center;
      transition: 1s;
      color: #F25C05;

      :hover {
        transition: 1.5s;
        background: #f2a03d;
        color: whitesmoke;
      }
    }
  }

  span {
    align-self: center;
    color: whitesmoke;

    a {
      text-decoration: none;
      color: palegoldenrod;

      :hover{
          color: #f2a03d;
      }
    }
  }

  #img-form {
    max-width: 500px;
    display: none;
  }

  @media (min-width: 968px) {
    flex-direction: row-reverse;
    justify-content: space-around;
    padding-top: 50px;

    form {
      max-width: 400px;
      min-height: 600px;

      h1{
        top: 20%;
      }

      input {
        height: 45px;
      }

      button {
          margin-top: 15px;
        padding: 25px;
        width: 150px;
        font-size: 20px;
      }
    }

    #img-form{
        display: block;
    }
  }

  @media (min-width: 1268px) {
    justify-content: space-around;
    padding-top: 50px;

    form {
      max-width: 500px;
    }
  }
`;
