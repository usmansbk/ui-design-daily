import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faAngellist,
  faDev,
} from "@fortawesome/free-brands-svg-icons";
import classes from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={classes.container}>
      <p>Built by Usman Suleiman Babakolo</p>
      <p className={classes.copyright}>&copy;UIDesignDaily 2021</p>
      <nav className={classes.nav}>
        <a href="https://github.com/usmansbk">
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </a>
        <a href="https://www.linkedin.com/in/usmansbk/">
          <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
        </a>
        <a href="https://www.linkedin.com/in/usmansbk/">
          <FontAwesomeIcon icon={faAngellist} size="lg" />
        </a>
        <a href="https://dev.to/devusman">
          <FontAwesomeIcon icon={faDev} size="lg" />
        </a>
      </nav>
    </footer>
  );
}
