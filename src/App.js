import "./App.css";
import "./components/List.css";
import DataBase from "./db";
import Header from "./components/Header";
import List from "./components/List";
import AddItem from "./components/AddItem";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

function App() {
  const [items, setItems] = useState(loadFromLocal("items") ?? DataBase);

  useEffect(() => {
    saveToLocal("items", items);
  }, [items]);

  function loadFromLocal(key) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (error) {
      console.error(error);
    }
  }

  function saveToLocal(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  function handleDeleteItem(ItemId) {
    setItems(items.filter((item) => item._id !== ItemId));
  }

  function handleAddItem(name) {
    const newItem = {
      _id: nanoid(),
      _type: "shopping.item",
      category: { _type: "ref", _ref: "c2hvcHBpbmcuY2F0ZWdvcnk6MA==" },
      name: { en: name, de: "" },
    };
    setItems([...items, newItem]);
  }

  return (
    <div className="App">
      <Header />
      <List className="List" items={items} onDeleteItem={handleDeleteItem} />
      <AddItem onAddItem={handleAddItem} />
    </div>
  );
}

export default App;
