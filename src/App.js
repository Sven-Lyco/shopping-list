import "./app.css";
import "./components/list.css";
import Header from "./components/Header";
import List from "./components/List";
import AddItem from "./components/AddItem";
import SearchBar from "./components/SearchBar";
import SearchListItems from "./components/SearchListItems";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { saveToLocal, loadFromLocal } from "./lib/localStorage";

function App() {
  const [shoppingList, setShoppingList] = useState(
    loadFromLocal("items") ?? []
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [shoppingItems, setShoppingItems] = useState([]);

  useEffect(() => {
    loadShoppingItems();
    async function loadShoppingItems() {
      try {
        const response = await fetch(
          "https://fetch-me.vercel.app/api/shopping/items"
        );
        const data = await response.json();
        setShoppingItems(data.data);
      } catch (error) {
        console.error(error);
      }
    }
  }, []);

  useEffect(() => {
    saveToLocal("items", shoppingList);
  }, [shoppingList]);

  return (
    <div className="app">
      <Header />
      <List
        className="list"
        items={shoppingList}
        onDeleteItem={handleDeleteItem}
      />
      <AddItem onAddItem={handleAddItem} />
      <SearchBar onSearch={handleSearch} searchInput={searchTerm} />
      {searchTerm && (
        <SearchListItems
          searchInput={searchTerm}
          items={shoppingItems}
          onAddSearchedItem={handleAddSearchedItem}
        />
      )}
    </div>
  );

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

  function handleAddSearchedItem(shoppingItem) {
    // const newSearchedItem = {
    //   _id: shoppingItem._id,
    //   _type: shoppingItem._type,
    //   category: shoppingItem.category,
    //   name: { en: shoppingItem.name.en, de: shoppingItem.name.de },
    // };
    if (shoppingList.find((item) => item._id === shoppingItem._id)) {
      alert("You already added the item");
      setSearchTerm("");
    } else {
      setSearchTerm("");
      setShoppingList([...shoppingList, shoppingItem]);
    }
  }

  function handleSearch(title) {
    setSearchTerm(title);
  }
}

export default App;
