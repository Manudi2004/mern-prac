import { useEffect, useState } from 'react';
import { getItems } from './api';
import ItemForm from './Components/Itemform';
import ItemList from './Components/Itemlist';

function App() {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    try {
      const res = await getItems();
      setItems(Array.isArray(res.data) ? res.data : []);
    } catch (error) {
      console.error('Error fetching items:', error);
      setItems([]);
    }
  };

  useEffect(() => {
    const loadItems = async () => {
      try {
        const res = await getItems();
        setItems(Array.isArray(res.data) ? res.data : []);
      } catch (error) {
        console.error('Error fetching items:', error);
        setItems([]);
      }
    };
    loadItems();
  }, []);

  return (
    <div style={{ maxWidth: '700px', margin: '2rem auto', fontFamily: 'sans-serif' }}>
      <h1>Item Manager</h1>
      <ItemForm onItemAdded={fetchItems} />
      <ItemList items={items} onRefresh={fetchItems} />
    </div>
  );
}

export default App;