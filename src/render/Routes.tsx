import {
  Route,
  HashRouter as Router,
  Routes as Switch,
} from "react-router-dom";
import RouterPaths from "@/render/utils/routes.json";
import HomePage from "@/render/containers/HomePage";

const Routes = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route caseSensitive path="/" element={<HomePage />} />
          <Route caseSensitive path={RouterPaths.HOME} element={<HomePage />} />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
