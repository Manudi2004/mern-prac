import { useEffect, useState } from "react";
import axios from "axios";

export default function ItemList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const res = await axios.get("https://mern-prac-ngq7.onrender.com/api/Items");
    setItems(res.data);
  };

  const deleteItem = async (id) => {
    await axios.delete(`https://mern-prac-ngq7.onrender.com/api/Items/${id}`);
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