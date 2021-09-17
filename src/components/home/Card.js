import classes from "./Card.module.css";

export default function Card({ title, date, src }) {
  return (
    <div className={classes.container}>
      <div className={classes.preview}>
        <img src={src} alt="" className={classes.thumbnail} />
      </div>
      <div className={classes.details}>
        <div>
          <h4 className={classes.title}>{title}</h4>
          <p className={classes.date}>{date}</p>
        </div>
        <button className={classes.button}>View</button>
      </div>
    </div>
  );
}
