import "./AddItem.css";
import { useState } from "react";

export default function AddItem({ onAddItem }) {
  const [title, setTitle] = useState("");
  return (
    <form action="#">
      <label htmlFor="add-item">
        <p className="App-Text">What do you want to buy?:</p>
        <input
          required
          id="add-item"
          className="Add-Input"
          type="text"
          placeholder="Add Item"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </label>
      <button
        className="Add-Item-Button"
        onClick={() => {
          setTitle("");
          onAddItem(title);
        }}
      >
        Add
      </button>
    </form>
  );
}
