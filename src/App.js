import "./App.css";
import "./components/List.css";
import DataBase from "./db";
import Header from "./components/Header";
import List from "./components/List";
import AddItem from "./components/AddItem";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

function App() {
  const [shoppingList, setShoppingList] = useState(
    loadFromLocal("items") ?? DataBase
  );
  const [apfel7, setApfel7] = useState([]);

  useEffect(() => {
    async function loadNewItems() {
      try {
        const response = await fetch(
          "https://fetch-me.vercel.app/api/shopping/items"
        );
        const data = await response.json();
        setApfel7(data);
      } catch (error) {
        console.log(error);
      }
    }
    loadNewItems();
  }, []);

  useEffect(() => {
    saveToLocal("items", shoppingList);
  }, [shoppingList]);

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
    setShoppingList(shoppingList.filter((item) => item._id !== ItemId));
  }

  function handleAddItem(name) {
    const newItem = {
      _id: nanoid(),
      _type: "shopping.item",
      category: { _type: "ref", _ref: "c2hvcHBpbmcuY2F0ZWdvcnk6MA==" },
      name: { en: name, de: "" },
    };
    setShoppingList([...shoppingList, newItem]);
  }

  return (
    <div className="App">
      <Header />
      <List
        className="List"
        items={shoppingList}
        onDeleteItem={handleDeleteItem}
      />
      <AddItem onAddItem={handleAddItem} />
    </div>
  );
}

export default App;
