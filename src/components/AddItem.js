import "./AddItem.css";
import { useState } from "react";

export default function AddItem({ onAddItem }) {
  const [title, setTitle] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onAddItem(title);
    setTitle("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="add-item" className="App-Text">
        What do you want to buy?:
      </label>
      <input
        id="add-item"
        className="Add-Input"
        type="text"
        placeholder="Add Item"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <button className="Add-Item-Button">Add</button>
    </form>
  );
}
