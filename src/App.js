import { useState } from "react";

import "./App.css";
import "./components/List.css";
import DataBase from "./db";
import Header from "./components/Header";
import List from "./components/List";

function App() {
  const [items, setItems] = useState(DataBase);

  function handleDeleteItem(ItemId) {
    setItems(items.filter((item) => item._id !== ItemId));
  }

  return (
    <>
      <Header />
      <List items={items} className="List" onDeleteItem={handleDeleteItem} />
    </>
  );
}

export default App;
