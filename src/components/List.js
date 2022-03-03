import "./List.css";

export default function List({ items, onDeleteItem }) {
  return (
    <ul className="List">
      {items.map((item) => {
        return (
          <li
            key={item._id}
            className="List-Item"
            onClick={() => onDeleteItem(item._id)}
          >
            {item.name.en}
          </li>
        );
      })}
    </ul>
  );
}

//<ListItem key={data._id} name={data.name.en} />
