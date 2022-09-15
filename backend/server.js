require("dotenv").config();
const express = require("express");
const productRoutes = require("./routes/productRoutes");
const registerRoutes = require("./routes/registerRoutes");
const connectDB = require("./config/db");

connectDB();

const app = express();

app.use(express.json());

app.use('/api/products', productRoutes);
app.use('/api/register', registerRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));