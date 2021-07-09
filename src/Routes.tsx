import { Switch, Route, HashRouter as Router } from "react-router-dom";
import RouterPaths from "@utils/routes.json";
import HomePage from "@containers/HomePage";

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
