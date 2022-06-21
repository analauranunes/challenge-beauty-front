import { Redirect } from "react-router-dom";
import DashLogged from "../../components/DashLogged"


function Dashboard({ authenticated, setAuthenticated }) {
  if (!authenticated) {
    return <Redirect to="/Login" />;
  }


  return <DashLogged setAuthenticated={setAuthenticated} />
}

export default Dashboard;
