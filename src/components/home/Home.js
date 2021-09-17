import { Link } from "react-router-dom";
import Header from "./Header";
import Card from "./Card";
import Footer from "./Footer";
import classes from "./Home.module.css";

export default function Home() {
  return (
    <div className={classes.container}>
      <Header />
      <Grid />
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
