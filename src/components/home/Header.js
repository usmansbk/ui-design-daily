import logo from "./logo.svg";
import classes from "./Header.module.css";

export default function Header() {
  return (
    <header className={classes.container}>
      <div className={classes.content}>
        <img src={logo} alt="" className={classes.logo} />
        <Counter />
      </div>
    </header>
  );
}

function Counter({ count = 0 }) {
  return (
    <div className={classes.counter}>
      <p className={classes.counterLabel}>DAY</p>
      <p className={classes.count}>{count}</p>
    </div>
  );
}
