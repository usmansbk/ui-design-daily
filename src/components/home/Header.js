import logo from "./logo.svg";
import classes from "./Header.module.css";

export default function Header() {
  return (
    <header className={classes.container}>
      <div className={classes.content}>
        <img src={logo} alt="" className={classes.logo} />
      </div>
    </header>
  );
}
