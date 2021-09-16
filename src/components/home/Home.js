import Header from "./Header";
import Card from "./Card";
import classes from "./Home.module.css";

export default function Home() {
  return (
    <div className={classes.container}>
      <Header />
      <Grid />
    </div>
  );
}

function Grid() {
  return (
    <div className={classes.grid}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}
