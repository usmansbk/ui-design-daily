import classes from "./Search.module.css";
import icon from "./icon.svg";

function Input() {
  return (
    <div className={classes.inputContainer}>
      <input
        type="search"
        placeholder="Search all templates"
        className={classes.input}
      />
      <button className={classes.button}>
        <img src={icon} alt="" />
        Search
      </button>
    </div>
  );
}

export default function Search() {
  return (
    <section className={classes.container}>
      <h2 className={classes.title}>
        Free and Pro website templates for your business
      </h2>
      <p className={classes.description}>
        Choose from over 300 fully responsive portfolio, blog and ecommerce
        templates.
      </p>
      <Input />
    </section>
  );
}
