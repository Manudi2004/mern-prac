import { useEffect, useState } from "react";
import axios from "axios";

export default function ItemList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const res = await axios.get("http://localhost:5001/api/items");
    setItems(res.data);
  };

  const deleteItem = async (id) => {
    await axios.delete(`http://localhost:5001/api/items/${id}`);
    fetchItems();
  };

  return (
    <ul>
      {items.map(item => (
        <li key={item._id}>
          {item.name} - {item.quantity} - {item.price}
          <button onClick={() => deleteItem(item._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}