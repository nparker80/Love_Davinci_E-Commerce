const Item = require('../models/Item');

const getAllItems = async (req, res) => {
  try {
    const items = await Item.find({});

    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500); ({ message: "Server error" });
  }
}

const getItemById = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);

    res.json(item);
  } catch (error) {
    console.error(error);
    res.status(500); ({ message: "Server error" });
  }
}

module.exports = {
  getAllItems, getItemById
}