// Enable usage of .env
require("dotenv").config();

// Connects to the database using the data provided in dotenv
const Pool = require("pg").Pool;
const pool = new Pool({
  user: process.env.USER,
  host: "localhost",
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: 5432,
});

// Get all meals stored in the database
function getMeals() {
  const query = "SELECT * FROM meals ORDER BY price";
  return new Promise((resolve, reject) => {
    pool.query(query, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res.rows);
      }
    });
  });
}

// Exports the queries to be used by the server
module.exports = {
    getMeals
}