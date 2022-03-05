/* eslint-disable jsx-a11y/no-redundant-roles */
import "./list.css";
import ListItem from "./ListItem";

export default function List({ items, onDeleteItem }) {
  return (
    <ul role="list" className="list">
      {items.map((item) => {
        return <ListItem item={item} key={item._id} deleteItem={onDeleteItem} />;
      })}
    </ul>
  );
}
