/* eslint-disable jsx-a11y/no-redundant-roles */
import "./List1.css";
import ListItem from "./ListItem";

export default function List({ shoppingList, onDeleteItem }) {
  return (
    <ul role="list" className="List">
      {shoppingList.map((item) => {
        return <ListItem item={item} key={item._id} deleteItem={onDeleteItem} />;
      })}
    </ul>
  );
}
