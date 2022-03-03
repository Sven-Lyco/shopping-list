import "./AddItem.css";
import { useState } from "react";

export default function AddItem({ onAddItem }) {
  const [title, setTitle] = useState("");
  return (
    <div className="Add">
      <input
        className="Add-Input"
        placeholder="Add Item"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <button
        className="Add-Item-Button"
        onClick={() => {
          setTitle("");
          onAddItem(title);
        }}
      >
        Add
      </button>
    </div>
  );
}
