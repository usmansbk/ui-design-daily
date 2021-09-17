import classes from "./Modal.module.css";
import xmark from "./x-mark.svg";

function RadioButton({ id, value, label }) {
  return (
    <div className={classes.radio}>
      <input
        type="radio"
        id={id}
        value={value}
        className={classes.radioInput}
      />
      <label htmlFor={id} className={classes.radioLabel}>
        {label}
      </label>
    </div>
  );
}

function TextInput({ id, required, label, multiline, ...rest }) {
  return (
    <div>
      <label htmlFor={id}>
        {label} {required && "*"}
      </label>
      {multiline ? (
        <textarea id={id} required={required} {...rest}></textarea>
      ) : (
        <input id={id} required={required} {...rest} />
      )}
    </div>
  );
}

function Button({ value, type = "button", mode = "flat" }) {
  return (
    <button mode={mode} type={type}>
      {value}
    </button>
  );
}

export default function Modal() {
  return (
    <section className={classes.container}>
      <button className={classes.closeButton}>
        <img src={xmark} alt="" className={classes.icon} />
      </button>
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
      <div>
        <Button value="Cancel" />
        <Button value="Add item" mode="contained" />
      </div>
    </section>
  );
}
