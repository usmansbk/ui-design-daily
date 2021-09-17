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
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
}
