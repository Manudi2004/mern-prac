import { useState } from "react";
import axios from "axios";

export default function AddItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  const addItem = async () => {
    await axios.post("https://mern-prac-ngq7.onrender.com/api/Items", {
      name,
      quantity,
      price
    });
    window.location.reload();
  };

  return (
    <div>
      <input placeholder="Name" onChange={e => setName(e.target.value)} />
      <input placeholder="Quantity" onChange={e => setQuantity(e.target.value)} />
      <input placeholder="Price" onChange={e => setPrice(e.target.value)} />
      <button onClick={addItem}>Add</button>
    </div>
  );
}