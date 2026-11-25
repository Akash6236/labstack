const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let items = [
  { id: 1, name: "Mouse", quantity: 25 },
  { id: 2, name: "Keyboard", quantity: 10 }
];

// READ
app.get("/items", (req, res) => {
  res.json(items);
});

// CREATE
app.post("/items", (req, res) => {
  const item = { id: Date.now(), ...req.body };
  items.push(item);
  res.json(item);
});

// DELETE
app.delete("/items/:id", (req, res) => {
  items = items.filter(
    (item) => item.id !== Number(req.params.id)
  );
  res.json({ message: "deleted" });
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});