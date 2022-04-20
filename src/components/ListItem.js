import "./ListItem.css";

export default function ListItem({ item, deleteItem }) {
  return (
    <li className="Listitem" onClick={() => deleteItem(item._id)}>
      {item.name.en}
    </li>
  );
}
