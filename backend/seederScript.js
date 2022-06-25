require("dotenv").config();

const itemsData = require("./data/items");
const connectDB = require("./config/db");
const Item = require("./models/Item");

connectDB();

const importData = async () => {
  try {
    await Item.deleteMany({});

    await Item.insertMany(itemsData);

    console.log("Success! Data is imported.");
    process.exit();

  } catch (error) {
    console.log(error);
    process.exit(1);

  }
};

importData();