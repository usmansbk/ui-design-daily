import { Link } from "react-router-dom";
import Header from "./Header";
import Card from "./Card";
import Footer from "./Footer";
import classes from "./Home.module.css";
import day1Thumb from "../../screenshots/day_1.png";
import day2Thumb from "../../screenshots/day_2.png";
import day3Thumb from "../../screenshots/day_3.png";

const cards = [
  {
    title: "Add Item Modal",
    date: "16 Sep 2021",
    src: day1Thumb,
    path: "/day-1",
  },
  {
    title: "Chart",
    date: "17 Sep 2021",
    src: day2Thumb,
    path: "/day-2",
  },
  {
    title: "Search Section",
    date: "18 Sep 2021",
    src: day3Thumb,
    path: "/day-3",
  },
];

export default function Home() {
  return (
    <div className={classes.container}>
      <Header day={cards.length} />
      <Grid />
      <Footer />
    </div>
  );
}

function Grid() {
  return (
    <section className={classes.body}>
      <div className={classes.grid}>
        {cards.map(({ title, date, src, path }) => (
          <Link to={path} key={path}>
            <Card title={title} date={date} src={src} />
          </Link>
        ))}
      </div>
    </section>
  );
}
