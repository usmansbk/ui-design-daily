import classes from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={classes.container}>
      <p>Built by Usman Suleiman Babakolo</p>
      <p className={classes.copyright}>&copy;UIDesignDaily 2021</p>
    </footer>
  );
}
