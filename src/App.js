import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import Header from "./components/Header";
import List from "./components/List";
import AddItem from "./components/AddItem";
import SearchBar from "./components/SearchBar";
import SearchListItems from "./components/SearchListItems";
import { loadFromLocal, saveToLocal } from "./lib/localStorage";
import useFetch from "./hooks/useFetch";

export default function App() {
  const [shoppingList, setShoppingList] = useState(loadFromLocal("shopping-list") ?? []);
  const [searchTerm, setSearchTerm] = useState("");
  const [shoppingItems] = useFetch();

  useEffect(() => {
    saveToLocal("shopping-list", shoppingList);
  }, [shoppingList]);

  return (
    <div className="App__Container">
      <Header />
      <List shoppingList={shoppingList} onDeleteItem={deleteItem} />
      <AddItem onAddItem={addItem} />
      <SearchBar onSearch={handleSearch} searchTerm={searchTerm} />
      {searchTerm && (
        <SearchListItems
          searchTerm={searchTerm}
          shoppingItems={shoppingItems}
          onAddSearchedItem={addSearchedItem}
        />
      )}
    </div>
  );

  function deleteItem(ItemId) {
    setShoppingList(shoppingList?.filter((item) => item._id !== ItemId));
  }

  function addItem(name) {
    const newItem = {
      _id: nanoid(),
      _type: "shopping.item",
      category: { _type: "ref", _ref: "c2hvcHBpbmcuY2F0ZWdvcnk6MA==" },
      name: { en: name, de: "" },
    };
    setShoppingList([...shoppingList, newItem]);
  }

  function addSearchedItem(shoppingItem) {
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
