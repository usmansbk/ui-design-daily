import { Link } from "react-router-dom";
import Header from "./Header";
import Card from "./Card";
import Footer from "./Footer";
import classes from "./Home.module.css";
import day2Thumb from "../../screenshots/day-2.png";

const cards = [
  {
    title: "Add Item Modal",
    date: "16 Sep 2021",
    src: "https://www.uidesigndaily.com/uploads/1443/day_1443_thumb.png",
    path: "/day-1",
  },
  {
    title: "Chart",
    date: "17 Sep 2021",
    src: day2Thumb,
    path: "/day-2",
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
