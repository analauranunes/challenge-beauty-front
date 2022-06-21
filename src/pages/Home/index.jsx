import { Redirect } from "react-router-dom";
import Register from "../../components/Register";

function Home({ authenticated }) {
  if (authenticated) {
    return <Redirect to="/Dashboard" />;
  }
  return <Register />;
}

export default Home;
