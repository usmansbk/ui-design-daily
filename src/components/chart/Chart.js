import clsx from "clsx";
import classes from "./Chart.module.css";

const options = [
  {
    id: "week",
    label: "This Week",
  },
  {
    id: "month",
    label: "This Month",
  },
];

function DropDown() {
  return (
    <select className={classes.dropdown}>
      {options.map(({ id, label }) => (
        <option key={id} className={classes.option} value={id}>
          {label}
        </option>
      ))}
    </select>
  );
}

function Progress({ color }) {
  return (
    <div className={classes.progress}>
      <div className={classes.expected} />
      <div
        className={classes.current}
        style={{
          backgroundColor: color,
        }}
      />
    </div>
  );
}

function Stat({ label, count = 0, color }) {
  return (
    <div className={classes.statContainer}>
      <div className={classes.statHeader}>
        <h6 className={classes.statText}>{label}</h6>
        <h6 className={clsx(classes.statText, classes.statCount)}>
          {count.toLocaleString("en-US")}
        </h6>
      </div>
      <Progress count={count} color={color} />
    </div>
  );
}

export default function Chart({ title }) {
  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <h2 className={classes.title}>{title}</h2>
        <DropDown />
      </header>
      <div className={classes.stats}>
        <Stat label="Direct" count={3183} color="#3fbeda" />
        <Stat label="Organic" count={3846} color="#0f1730" />
        <Stat label="Social" count={1058} color="#8234e4" />
        <Stat label="Referral" count={174} color="#4249ed" />
      </div>
    </div>
  );
}
