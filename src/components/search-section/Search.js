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
        <img src={icon} alt="" className={classes.icon} />
        Search
      </button>
    </div>
  );
}

const suggestions = [
  {
    id: "blog",
    name: "Blog",
    color: "#d0678a",
    backgroundColor: "#ffedf3",
  },
  {
    id: "business",
    name: "Business",
    color: "#805bbc",
    backgroundColor: "#f4edff",
  },
  {
    id: "portfolio",
    name: "Portfolio",
    color: "#51933e",
    backgroundColor: "#dff4d7",
  },
  {
    id: "ecommerce",
    name: "Ecommerce",
    color: "#e27f23",
    backgroundColor: "#ffecda",
  },
];

function Suggestions() {
  return (
    <ul className={classes.list}>
      {suggestions.map(({ id, name, color, backgroundColor }) => (
        <li key={id}>
          <div
            className={classes.item}
            style={{
              backgroundColor,
            }}
          >
            <span className={classes.itemLabel} style={{ color }}>
              {name}
            </span>
          </div>
        </li>
      ))}
    </ul>
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
      <Suggestions />
    </section>
  );
}
