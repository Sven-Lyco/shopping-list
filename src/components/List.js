/* eslint-disable jsx-a11y/no-redundant-roles */
import "./list.css";
import ListItem from "./ListItem";

export default function List({ shoppingList, onDeleteItem }) {
  return (
    <ul role="list" className="list">
      {shoppingList.map((item) => {
        return <ListItem item={item} key={item._id} deleteItem={onDeleteItem} />;
      })}
    </ul>
  );
}
