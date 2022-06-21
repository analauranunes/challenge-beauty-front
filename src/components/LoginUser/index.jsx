import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Header from "../Header";
import { Container, PStyled, H1Styled } from "./style";
import baseUrl from "../../services/api";
import loginSchema from "../../schemas/Login";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import homeLogo from "../../assets/beauty-log-reg.jpeg";
import { Redirect } from "react-router-dom";

function LoginUser({ authenticated, setAuthenticated }) {
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(loginSchema),
  });

  function onSubmit(data) {
    baseUrl
      .post("/login", data)
      .then((res) => {
        setAuthenticated(true);
        localStorage.setItem("userToken", JSON.stringify(res.data.token));
        toast.success("Login efetuado com sucesso!");
      })
      .catch(() => {
        toast.error("Ops! Algo deu errado.");
      });
  }

  if (authenticated) {
    return <Redirect to="/Dashboard" />;
  }

  return (
    <>
      <Header>
        <H1Styled>My Beauty Pass</H1Styled>
        <PStyled>Beleza e bem estar muito mais acessíveis.</PStyled>
      </Header>
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Faça seu login</h1>
          <label>E-mail</label>
          <input required type="email" {...register("email")} />
          <label>Senha</label>
          <input required type="password" {...register("password")} min="8" />
          <button type="submit">Logar</button>
          <span>
            Ainda não é cadastrado? Clique <Link to="/">aqui</Link>.
          </span>
        </form>
        <img id="img-form" src={homeLogo} alt="logo beauty pass" />
      </Container>
    </>
  );
}

export default LoginUser;
