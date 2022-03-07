import "./ListItem1.css";

export default function ListItem({ item, deleteItem }) {
  return (
    <li className="List-Item" onClick={() => deleteItem(item._id)}>
      {item.name.en}
    </li>
  );
}
