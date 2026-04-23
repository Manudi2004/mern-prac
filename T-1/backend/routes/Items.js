const router = require("express").Router();
const Item = require("../Models/Item");

// CREATE
router.post("/", async (req, res) => {
  try {
    const newItem = new Item(req.body);
    const saved = await newItem.save();
    res.json(saved);
  } catch (err) {
    res.status(500).json(err);
  }
});

// READ
router.get("/", async (req, res) => {
  const Items = await Item.find();
  res.json(Items);
});

// DELETE
router.delete("/:id", async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.json("Deleted");
});

module.exports = router;