import "./searchbar.css";
import { useState } from "react";

export default function SearchBar({ handleSearch }) {
  const [title, setTitle] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    handleSearch(title);
    setTitle("");
  }

  return (
    <form className="searchbar-container" onSubmit={handleSubmit}>
      <input
        type="text"
        className="searchbar"
        placeholder="Search..."
        onChange={(event) => {
          handleSearch(event.target.value);
        }}
      ></input>
    </form>
  );
}
