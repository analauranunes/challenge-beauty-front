import { Redirect } from "react-router-dom";
import DashLogged from "../../components/DashLogged"


function Dashboard({ authenticated, setAuthenticated, tokenStorage }) {
  if (!authenticated) {
    return <Redirect to="/Login" />;
  }


  return <DashLogged setAuthenticated={setAuthenticated} tokenStorage={tokenStorage}/>
}

export default Dashboard;
