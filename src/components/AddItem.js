import "./additem.css";
import { useState } from "react";

export default function AddItem({ onAddItem }) {
  const [title, setTitle] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onAddItem(title);
    setTitle("");
  }

  return (
    <form className="add" onSubmit={handleSubmit}>
      <label htmlFor="add-item" className="app-text">
        What do you want to buy?:
      </label>
      <input
        id="add-item"
        className="add-input"
        type="text"
        placeholder="Add Item"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <button className="add-item-button">Add</button>
    </form>
  );
}
