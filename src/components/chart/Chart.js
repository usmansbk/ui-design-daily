import clsx from "clsx";
import { useState } from "react";
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

function DropDown({ value, onChange }) {
  return (
    <select value={value} className={classes.dropdown} onChange={onChange}>
      {options.map(({ id, label }) => (
        <option key={id} className={classes.option} value={id}>
          {label}
        </option>
      ))}
    </select>
  );
}

function Progress({ color, percent }) {
  return (
    <div className={classes.progress}>
      <div className={classes.expected} />
      <div
        className={classes.current}
        style={{
          backgroundColor: color,
          width: percent,
        }}
      />
    </div>
  );
}

function Stat({ label, count = 0, color, percent }) {
  return (
    <div className={classes.statContainer}>
      <div className={classes.statHeader}>
        <h6 className={classes.statText}>{label}</h6>
        <h6 className={clsx(classes.statText, classes.statCount)}>
          {count.toLocaleString("en-US")}
        </h6>
      </div>
      <Progress count={count} color={color} percent={percent} />
    </div>
  );
}

const stats = {
  week: [
    {
      id: "direct",
      label: "Direct",
      count: 3183,
      color: "#3fbeda",
      percent: "40%",
    },
    {
      id: "organic",
      label: "Organic",
      count: 3846,
      color: "#0f1730",
      percent: "60%",
    },
    {
      id: "social",
      label: "Social",
      count: 1058,
      color: "#8234e4",
      percent: "15%",
    },
    {
      id: "referral",
      label: "Referral",
      count: 174,
      color: "#4249ed",
      percent: "10%",
    },
  ],
  month: [
    {
      id: "direct",
      label: "Direct",
      count: 2813,
      color: "#3fbeda",
      percent: "80%",
    },
    {
      id: "organic",
      label: "Organic",
      count: 1486,
      color: "#0f1730",
      percent: "40%",
    },
    {
      id: "social",
      label: "Social",
      count: 3958,
      color: "#8234e4",
      percent: "95%",
    },
    {
      id: "referral",
      label: "Referral",
      count: 1074,
      color: "#4249ed",
      percent: "30%",
    },
  ],
};

export default function Chart({ title }) {
  const [selected, setSelected] = useState("week");
  const data = stats[selected];

  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <h2 className={classes.title}>{title}</h2>
        <DropDown
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
        />
      </header>
      <div className={classes.stats}>
        {data.map(({ id, label, count, color, percent }) => (
          <Stat
            key={id}
            label={label}
            count={count}
            color={color}
            percent={percent}
          />
        ))}
      </div>
    </div>
  );
}
