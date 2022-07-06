import { Route, Switch } from "react-router-dom";
import Home from "../Pages/Home";
import LoginUser from "../Pages/LoginUser";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/LoginUser">
        <LoginUser/>
      </Route>
    </Switch>
  );
}

export default Routes;
