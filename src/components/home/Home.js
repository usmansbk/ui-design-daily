import { Link, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Card from "./Card";
import Footer from "./Footer";
import classes from "./Home.module.css";
import AddItemModal from "../add-item-modal";

export default function Home() {
  return (
    <div className={classes.container}>
      <Header />
      <Switch>
        <Route path="/add-item-modal">
          <AddItemModal />
        </Route>
        <Route exact path="/">
          <Grid />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

function Grid() {
  return (
    <section className={classes.body}>
      <div className={classes.grid}>
        <Link to="/add-item-modal">
          <Card />
        </Link>
      </div>
    </section>
  );
}
