const express = require("express");

const Recipes = require("./recipe-model");

const router = express.Router();

router.get("/", (req, res) => {
  Recipes.getRecipes()
    .then(recipes => {
      res.status(200).json(recipes);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Error getting recipes" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Recipes.getRecipeById(id)
    .then(recipe => {
      if (recipe) {
        res.status(200).json(recipe);
      } else {
        res.status(404).json({ message: "No recipe found" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Error finding recipe" });
    });
});

module.exports = router;
