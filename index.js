/*
Name: Ferguson, Macy
Assignment: Week 10 Recipes
Description: Creates webpages for threee recipes
Date: March 30, 2025
*/

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Set EJS as the viewing engine
app.set("view engine", "ejs");

// Use body parser to parse the data in forms
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (e.g., CSS, images)
app.use(express.static("public"));

// Home page route
app.get("/", (req, res) => {
  res.render("home", { title: "Home" });
});

// Recipe 1 - Marry Me Chicken
app.get("/recipe1", (req, res) => {
  res.render("recipe1", { title: "Marry Me Chicken" });
});

// Recipe 2 - No-Bake Icebox Cake
app.get("/recipe2", (req, res) => {
  res.render("recipe2", { title: "No-Bake Icebox Cake" });
});

// Recipe 3 - Easy One-Pot Pasta
app.get("/recipe3", (req, res) => {
  res.render("recipe3", { title: "Easy One-Pot Pasta" });
});

// Start the server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
