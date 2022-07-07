import { Route, Switch } from "react-router-dom";
import EditHospital from "../Pages/EditHospital";
import Home from "../Pages/Home";
import LoginHospital from "../Pages/LoginHospital";
import LoginUser from "../Pages/LoginUser";
import RegisterHospital from "../Pages/RegisterHospital";
import RegisterUser from "../Pages/RegisterUser";

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
      <Route exact path="/RegisterUser">
        <RegisterUser />
      </Route>
      <Route exact path="/RegisterHospital">
        <RegisterHospital />
      </Route>
      <Route exact path="/EditHospital">
        <EditHospital />
      </Route>
    </Switch>
  );
}

export default Routes;
