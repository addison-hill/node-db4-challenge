const express = require("express");
const helmet = require("helmet");

const db = require("./data/db-config");

const server = express();

server.use(helmet());
server.use(express.json());

server.get("/", (req, res) => {
  res.send("<h3>Families Recipe Book</h3>");
});

server.get("/api/recipes", (req, res) => {
  db("recipes")
    .then(recipes => {
      res.status(200).json(recipes);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Error getting recipes" });
    });
});

module.exports = server;
