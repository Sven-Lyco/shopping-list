import "./List.css";

import ListItem from "./ListItem";
import DataBase from "../db";

export default function List() {
  return (
    <ul className="List">
      {DataBase.map((data) => {
        return <ListItem key={data.id} itemName={data} />;
      })}
    </ul>
  );
}
