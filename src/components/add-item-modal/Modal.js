import clsx from "clsx";
import { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Modal.module.css";
import xmark from "./x-mark.svg";

function Checkbox({ checked }) {
  return (
    <div className={clsx(classes.checkboxBorder, checked && classes.checked)}>
      <div className={classes.checkboxDot} />
    </div>
  );
}

function RadioButton({ id, value, label }) {
  const [checked, setChecked] = useState(false);
  return (
    <div onClick={() => setChecked(!checked)} className={classes.radio}>
      <Checkbox checked={checked} />
      <label htmlFor={id} className={classes.radioLabel}>
        {label}
      </label>
    </div>
  );
}

function TextInput({ id, required, label, multiline, ...rest }) {
  return (
    <div className={classes.inputContainer}>
      <label htmlFor={id} className={classes.inputLabel}>
        {label} {required && "*"}
      </label>
      {multiline ? (
        <textarea
          className={classes.input}
          id={id}
          required={required}
          {...rest}
        ></textarea>
      ) : (
        <input
          className={classes.input}
          id={id}
          required={required}
          {...rest}
        />
      )}
    </div>
  );
}

function Button({ value, type = "button", contained }) {
  return (
    <button
      type={type}
      className={clsx(classes.button, contained && classes.contained)}
    >
      {value}
    </button>
  );
}

export default function Modal() {
  return (
    <section className={classes.container}>
      <Link to="/" className={classes.closeButton}>
        <img src={xmark} alt="" className={classes.icon} />
      </Link>
      <h2 className={classes.title}>Add new item</h2>
      <p className={classes.optionLabel}>
        What kind of item would you like to add?
      </p>
      <div className={classes.radioGroup}>
        <RadioButton id="service" value="Service" label="Service" />
        <RadioButton id="product" value="Product" label="Product" />
      </div>
      <TextInput
        id="name"
        label="Name"
        placeholder="Eg. Business Consulting"
        required
      />
      <TextInput
        id="description"
        label="Description"
        placeholder="Describe your product"
        multiline
      />
      <TextInput
        id="price"
        label="Price"
        placeholder="Enter amount"
        required
        type="number"
        min={0}
      />
      <div className={classes.buttonGroup}>
        <Button value="Cancel" />
        <Button value="Add item" contained />
      </div>
    </section>
  );
}
