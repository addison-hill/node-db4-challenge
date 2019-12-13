const express = require("express");
const helmet = require("helmet");

const RecipeRouter = require("./recipe/recipe-router");

const server = express();

server.use(helmet());
server.use(express.json());
server.use("/api/recipes", RecipeRouter);

server.get("/", (req, res) => {
  res.send("<h3>Families Recipe Book</h3>");
});

module.exports = server;
