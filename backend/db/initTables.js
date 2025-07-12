const connectDB = require("./connection");

const createTables = async () => {
  const db = await connectDB();


 await db.run(`
  CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    category TEXT NOT NULL,         -- 'wine', 'stuff', 'water', 'soda', 'cigar'
    description TEXT,
    price REAL,
    originalPrice REAL,
    image TEXT,
    region TEXT,
    

    -- Wine-specific
    vintage TEXT,
    type TEXT,                      -- wine type (e.g., red, white)
    rating REAL,
    inStock BOOLEAN,

    -- Stuff-specific
    spice_level TEXT,
    best_with TEXT,

    -- Cigar-specific
    nicotine_strength TEXT,
    length_cm REAL,
    flavor TEXT,

    -- Water/Soda-specific
    volume_ml INTEGER,
    is_carbonated BOOLEAN,
    expiry_date TEXT
);

  `) 

 
  



  console.log("✅ Tables created successfully");
};

module.exports=createTables
