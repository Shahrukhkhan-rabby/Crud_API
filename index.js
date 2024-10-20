const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model");
const productRoute = require('./routes/product.route')
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/api/products', productRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
})
    




mongoose
  .connect(
    "mongodb+srv://shahrukhkhan3418198:l2pm4AoWMBQP6OvX@backenddb.9zigw.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed");
  });
