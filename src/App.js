import "./App.css";
import "./components/List.css";
import DataBase from "./db";
import Header from "./components/Header";
import List from "./components/List";
import AddItem from "./components/AddItem";
import { useState } from "react";

let nextId = 1;

function App() {
  const [items, setItems] = useState(DataBase);

  function handleDeleteItem(ItemId) {
    setItems(items.filter((item) => item._id !== ItemId));
  }

  function handleAddItem(title) {
    const newItem = {
      _id: `c2hvcHBpbmcuaXRlbTo1${nextId++}`,
      _type: "shopping.item",
      category: { _type: "ref", _ref: "c2hvcHBpbmcuY2F0ZWdvcnk6MA==" },
      name: { en: title, de: "" },
    };
    setItems([...items, newItem]);
  }

  return (
    <div className="App">
      <Header />
      <p className="App-Text">What do you want to buy?:</p>
      <AddItem onAddItem={handleAddItem} />
      <List className="List" items={items} onDeleteItem={handleDeleteItem} />
    </div>
  );
}

export default App;
