import clsx from "clsx";
import { Transition } from "react-transition-group";
import { useState } from "react";
import classes from "./Modal.module.css";
import xmark from "./x-mark.svg";

function Checkbox({ checked }) {
  return (
    <div className={clsx(classes.checkboxBorder, checked && classes.checked)}>
      <div className={classes.checkboxDot} />
    </div>
  );
}

function RadioButton({ id, checked, value, onClick, label }) {
  return (
    <div onClick={() => onClick(value)} className={classes.radio}>
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

function Button({ value, type = "button", contained, onClick }) {
  return (
    <button
      type={type}
      className={clsx(classes.button, contained && classes.contained)}
      onClick={onClick}
    >
      {value}
    </button>
  );
}

function Form({ onCancel }) {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <h2 className={classes.title}>Add new item</h2>
      <p className={classes.optionLabel}>
        What kind of item would you like to add?
      </p>
      <div className={classes.radioGroup}>
        <RadioButton
          value="Service"
          label="Service"
          onClick={setChecked}
          checked={checked === "Service"}
        />
        <RadioButton
          value="Product"
          label="Product"
          onClick={setChecked}
          checked={checked === "Product"}
        />
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
        <Button value="Cancel" onClick={onCancel} />
        <Button value="Add item" contained />
      </div>
    </>
  );
}

function IconButton({ onClick, src }) {
  return (
    <button onClick={onClick} className={classes.closeButton}>
      <img src={src} alt="" className={classes.icon} />
    </button>
  );
}

export default function Modal({ visible, onDismiss }) {
  const modalTransitions = {
    entering: 0,
    entered: 1,
    exiting: 0,
    exited: 0,
  };
  const rootTransitions = {
    entering: 1,
    entered: 1,
    exiting: 1,
    exited: 0,
  };

  return (
    <Transition
      in={visible}
      timeout={{
        enter: 0,
        exit: 200,
      }}
    >
      {(state) => (
        <div
          className={classes.root}
          style={{
            transform: `scale(${rootTransitions[state]})`,
          }}
        >
          <div className={classes.modal}>
            <section
              className={classes.container}
              style={{
                transform: `scale(${modalTransitions[state]})`,
              }}
            >
              <IconButton onClick={onDismiss} src={xmark} />
              <Form onCancel={onDismiss} />
            </section>
          </div>
        </div>
      )}
    </Transition>
  );
}
