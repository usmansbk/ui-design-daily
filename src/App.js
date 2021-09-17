import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/home";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
