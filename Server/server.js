const express = require("express");
const port = 3100;
const app = express();

// Enable commination with database
const db = require("./queries");

// Endpoint for getting all meals from db
app.get("/meals", async (req, res) => {
  let meals = await db.getMeals();
  return res.send(meals);
});

app.listen(port);
