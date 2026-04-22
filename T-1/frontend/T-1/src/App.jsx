import AddItem from "./components/AddItem";
import ItemList from "./components/ItemList";

function App() {
  return (
    <div>
      <h2>Item Manager</h2>
      <AddItem />
      <ItemList />
    </div>
  );
}

export default App;