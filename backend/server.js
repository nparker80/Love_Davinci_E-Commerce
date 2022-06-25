require("dotenv").config();
const { application } = require("express");
const express = require("express");
const connectDB = require("./config/db");
const itemRoutes = require("./routes/itemRoutes");

connectDB();

const app = express();

app.use(express.json());

app.use('/api/items', itemRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));