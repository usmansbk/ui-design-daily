import { useState } from "react";
import Modal from "./Modal";
import classes from "./index.module.css";

export default function AddItemModal() {
  const [visible, setVisible] = useState(false);
  const hideModal = () => setVisible(false);
  const showModal = () => setVisible(true);

  return (
    <div className={classes.container}>
      <button onClick={showModal}>Open Modal</button>
      <Modal visible={visible} onDismiss={hideModal} />
    </div>
  );
}
