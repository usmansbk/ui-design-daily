import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/home";
import Charts from "./components/chart";
import AddItemModal from "./components/add-item-modal";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/day-1">
          <AddItemModal />
        </Route>
        <Route path="/day-2">
          <Charts />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
