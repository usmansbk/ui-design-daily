import classes from "./Modal.module.css";

function RadioButton({ id, value, label }) {
  return (
    <div>
      <input type="radio" id={id} value={value} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

function TextInput({ id, type, label, placeholder, required, min }) {
  return (
    <div>
      <label htmlFor={id}>
        {label} {required && "*"}
      </label>
      <input
        required={required}
        min={min}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}

export default function Modal() {
  return (
    <section className={classes.container}>
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
        id="price"
        label="Price"
        placeholder="Enter amount"
        required
        type="number"
        min={0}
      />
    </section>
  );
}
