import { useState, useEffect } from "react";

export default function useFetch() {
  const [shoppingItems, setShoppingItems] = useState([]);

  useEffect(() => {
    loadShoppingItems();
    async function loadShoppingItems() {
      try {
        const response = await fetch("https://fetch-me.vercel.app/api/shopping/items");
        const data = await response.json();
        setShoppingItems(data.data);
      } catch (error) {
        console.error(error);
      }
    }
  }, []);
  return [shoppingItems];
}