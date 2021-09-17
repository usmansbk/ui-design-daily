import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import classes from "./Modal.module.css";

function RadioButton({ id, value, label }) {
  return (
    <div>
      <input type="radio" id={id} value={value} />
      <label htmlFor={id}>{label}</label>
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
      <button>
        <FontAwesomeIcon icon={faTimes} />
      </button>
      <h2>Add new item</h2>
      <p>What kind of item would you like to add?</p>
      <div>
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
