import { Switch, Route, HashRouter as Router } from "react-router-dom";
import RouterPaths from "@/render/utils/routes.json";
import HomePage from "@/render/containers/HomePage";

const Routes = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path={RouterPaths.HOME} component={HomePage} />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
