import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/home";
import AddItemModal from "./components/add-item-modal";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/add-item-modal">
          <AddItemModal />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
