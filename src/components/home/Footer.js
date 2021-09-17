import classes from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={classes.container}>
      <p className={classes.copyright}>&copy;UIDesignDaily 2021</p>
      <p className={classes.copyright}>Built by Usman Suleiman Babakolo</p>
    </footer>
  );
}
