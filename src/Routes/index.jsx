import { Route, Switch } from "react-router-dom";
import CadastroUser from "../Pages/CadastroUser";
import EditUser from "../Pages/EditUser";
import Home from "../Pages/Home";

import Requirements from "../Pages/Requirements";
import LoginHospital from "../Pages/LoginHospital";
import LoginUser from "../Pages/LoginUser";
import RegisterHospital from "../Pages/RegisterHospital";


function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/requirements">
        <Requirements/>
      </Route>
      <Route exact path="/LoginUser">
        <LoginUser />
      </Route>
      <Route exact path="/LoginHospital">
        <LoginHospital />
      </Route>
      <Route exact path="/CadastroUser">
        <CadastroUser />
      </Route>
      <Route exact path="/RegisterHospital">
        <RegisterHospital />
      </Route>
      <Route exact path="/EditUser">
        <EditUser/>
      </Route>
    </Switch>
  );
}

export default Routes;
