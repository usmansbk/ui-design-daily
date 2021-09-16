import classes from "./Card.module.css";

export default function Card() {
  return (
    <div className={classes.container}>
      <img
        src="https://www.uidesigndaily.com/uploads/1444/day_1444_thumb.png"
        alt=""
        className={classes.thumbnail}
      />
      <div>
        <h1>Charts</h1>
        <p>16 Sep 2021</p>
      </div>
    </div>
  );
}
