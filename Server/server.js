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

// Endpoint for getting all customers from db
app.get("/customers", async (req, res) => {
  let customers = await db.getCustomers();
  return res.send(customers);
});

// Endpoint for getting all orders from db
app.get("/orders", async (req, res) => {
    let orders = await db.getOrders();
    return res.send(orders);
  });

app.listen(port);
