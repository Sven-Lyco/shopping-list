import "./List.css";
import ListItem from "./ListItem";

export default function List({ items, onDeleteItem }) {
  return (
    <ul className="List">
      {items.map((item) => {
        return (
          <ListItem item={item} key={item._id} deleteItem={onDeleteItem} />
        );
      })}
    </ul>
  );
}
