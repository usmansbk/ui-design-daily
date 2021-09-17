import classes from "./Card.module.css";

export default function Card() {
  return (
    <div className={classes.container}>
      <div className={classes.preview}>
        <img
          src="https://www.uidesigndaily.com/uploads/1443/day_1443_thumb.png"
          alt=""
          className={classes.thumbnail}
        />
      </div>
      <div className={classes.details}>
        <div>
          <h4 className={classes.title}>Add Item Modal</h4>
          <p className={classes.date}>16 Sep 2021</p>
        </div>
        <button className={classes.button}>View</button>
      </div>
    </div>
  );
}
