const sqlite3 = require("sqlite3").verbose();
const { open } = require("sqlite");
const path = require("path");

const dbPath = process.env.DATABASE_URL || path.join(__dirname, "../products.db");

const connectDB = async () => {
  return open({
    filename: dbPath,
    driver: sqlite3.Database,
  });
};

module.exports = connectDB;
