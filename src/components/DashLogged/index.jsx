import { useState, useEffect } from "react";
import baseUrl from "../../services/api";
import Header from "../Header";
import { Container, H1Styled, StyledTitle, StyledImg } from "./style";
import { FiLogOut } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import ServicesList from "../ServicesList";
import beautyLogo from "../../assets/beauty-logo.jpeg";

function DashLogged({ setAuthenticated }) {
  const [user, setUser] = useState();
  const history = useHistory();
  const token = JSON.parse(localStorage.getItem("userToken"));

  useEffect(() => {
    baseUrl
      .get("users/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));
  }, [setUser]);

  function handleClick() {
    localStorage.clear();
    setAuthenticated(false);
    history.push("/Login");
  }


  return (
    <>
      {user && (
        <>
          <Header>
            <H1Styled>My Beauty Pass</H1Styled>
            <Container>
              <p>Bem vind@, {user.name}!</p>
              <span onClick={handleClick}>
                <FiLogOut />
              </span>
            </Container>
          </Header>
          <StyledTitle>Melhores opções</StyledTitle>
          <a href="https://www.linkedin.com/company/my-beauty-pass/" target="_blank" rel="noreferrer">
            <StyledImg src={beautyLogo} alt="my beauty pass logo" />
          </a>
          <ServicesList />
        </>
      )}
    </>
  );
}

export default DashLogged;
