import "./ListItem.css";

export default function ListItem({ itemName }) {
  console.log(itemName.name.en);
  return <button className="List-Item">{itemName.name.en}</button>;
}
