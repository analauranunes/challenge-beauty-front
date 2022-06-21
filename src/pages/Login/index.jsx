import LoginUser from "../../components/LoginUser";

function Login({authenticated, setAuthenticated}) {
  return <LoginUser authenticated={authenticated} setAuthenticated={setAuthenticated}/>;
}

export default Login;
