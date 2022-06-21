import { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Login from "../pages/Login";

function Routes() {
  const [authenticated, setAuthenticated] = useState(false);
  const [tokenStorage, setTokenStorage] = useState();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("userToken"));
    setTokenStorage(token);

    if (token) {
      return setAuthenticated(true);
    }
  }, []);

  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/Login">
        <Login
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </Route>
      <Route exact path="/Dashboard">
        <Dashboard authenticated={authenticated} setAuthenticated={setAuthenticated} tokenStorage={tokenStorage} />
      </Route>
    </Switch>
  );
}

export default Routes;
