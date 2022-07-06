import { Route, Switch } from "react-router-dom";
import Home from "../Pages/Home";
import Requirements from "../Pages/Requirements";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/requirements">
    <Requirements/>
      </Route>
    </Switch>
  );
}

export default Routes;
