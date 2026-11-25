
import { useState, useEffect } from "react";

const URL = "http://localhost:5000/items";

function App() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  // READ
  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  // CREATE
  function addItem() {
    fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, quantity }),
    })
      .then((res) => res.json())
      .then((item) => setItems([...items, item]));

    setName("");
    setQuantity("");
  }

  // DELETE
  function deleteItem(id) {
    fetch(URL + "/" + id, { method: "DELETE" });
    setItems(items.filter((item) => item.id !== id));
  }

  return (
    <div>
      <h1>Inventory Management System</h1>

      <input
        placeholder="Item Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />

      <button onClick={addItem}>Add Item</button>

      <h2>Inventory List</h2>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity}
            <button onClick={() => deleteItem(item.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
