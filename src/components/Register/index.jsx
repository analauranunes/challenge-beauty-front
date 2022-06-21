import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import homeLogo from "../../assets/beauty-log-reg.jpeg";
import registerSchema from "../../schemas/Register";
import baseUrl from "../../services/api";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { Container, PStyled, H1Styled } from "./style";
import Header from "../Header";
import { Link } from "react-router-dom";

function Register() {
  const history = useHistory();

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(registerSchema),
  });

  function onSubmit(data) {
    baseUrl
      .post("/users", data)
      .then(() => {
        toast.success("Conta criada com sucesso!");
        history.push("/Login");
      })
      .catch(() => {
        toast.error("Ops! Algo deu errado.");
      });
  }

  return (
    <>
      <Header>
        <H1Styled>My Beauty Pass</H1Styled>
        <PStyled>Beleza e bem estar muito mais acessíveis.</PStyled>
      </Header>
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Faça seu cadastro</h1>
          <label>Nome completo</label>
          <input required type="text" {...register("name")} />
          <label>E-mail</label>
          <input required type="email" {...register("email")} />
          <label>Confirme o e-mail</label>
          <input required type="email" {...register("confirmEmail")} />
          <label>Senha</label>
          <input required type="password" {...register("password")} min="8" />
          <label>Confirme a senha</label>
          <input
            required
            type="password"
            {...register("confirmPassword")}
            min="8"
          />
          <button type="submit">Cadastrar</button>
          <span>
            Já é cadastrado? Clique <Link to="/Login">aqui</Link>.
          </span>
        </form>
        <img id="img-form" src={homeLogo} alt="logo beauty pass" />
      </Container>
    </>
  );
}

export default Register;
