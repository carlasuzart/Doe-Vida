import { Route, Switch } from "react-router-dom";
import CadastroUser from "../Pages/CadastroUser";
import Home from "../Pages/Home";
import LoginHospital from "../Pages/LoginHospital";
import LoginUser from "../Pages/LoginUser";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/LoginUser">
        <LoginUser />
      </Route>
      <Route exact path="/LoginHospital">
        <LoginHospital />
      </Route>
      <Route exact path="/CadastroUser">
        <CadastroUser/>
      </Route>
    </Switch>
  );
}

export default Routes;
