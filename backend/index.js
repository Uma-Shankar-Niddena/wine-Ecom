const express = require("express");
const cors = require("cors");
require("dotenv").config();

// Import database setup and seeding
const createTables = require("./db/initTables");
const seedProducts = require("./db/seedProducts");



// Import API routes
const productsRoutes = require("./routes/products");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use("/images", express.static("images"));

// Routes
app.use("/api/products", productsRoutes);

// Start the server and prepare DB
const startServer = async () => {
  await createTables();     // ✅ Creates tables if not exist
  await seedProducts();
 // ✅ Inserts product data if table is empty
       // ✅ Inserts stuff data if table is empty
  ; //update category to wine" 

  app.listen(3001, () => {
    console.log("🚀 Server running on http://localhost:3001");
  });
};

startServer();
