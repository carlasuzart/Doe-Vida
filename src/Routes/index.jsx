import { Route, Switch } from "react-router-dom";

import EditHospital from "../Pages/EditHospital";
import EditUser from "../Pages/EditUser";
import Home from "../Pages/Home";

import Requirements from "../Pages/Requirements";
import LoginHospital from "../Pages/LoginHospital";
import LoginUser from "../Pages/LoginUser";
import RegisterHospital from "../Pages/RegisterHospital";
import DateAvaliable from "../Pages/DateAvaliable";
import RegisterUser from "../Pages/RegisterUser";
import Schedules from "../Pages/Schedules";



function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/Requirements">
        <Requirements/>
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
      <Route exact path="/EditUser">
        <EditUser/>
      </Route>
      <Route exact path="/DateAvaliable">
        <DateAvaliable/>
      </Route>
      <Route exact path="/Schedules">
     <Schedules />
      </Route>

    </Switch>
  );
}

export default Routes;
