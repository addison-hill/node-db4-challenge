exports.seed = function(knex) {
  return knex("recipe_ingredients")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("recipe_ingredients").insert([
        {
          recipe_id: 1,
          ingredient_id: 1,
          quantity: 1,
          unit_measurement: "box"
        },
        { recipe_id: 1, ingredient_id: 7, quantity: 3, unit_measurement: "oz" },
        {
          recipe_id: 1,
          ingredient_id: 8,
          quantity: 20,
          unit_measurement: "crackers"
        },
        {
          recipe_id: 2,
          ingredient_id: 1,
          quantity: 1,
          unit_measurement: "box"
        },
        { recipe_id: 2, ingredient_id: 4, quantity: 8, unit_measurement: "oz" },
        { recipe_id: 2, ingredient_id: 5, quantity: 8, unit_measurement: "oz" },
        {
          recipe_id: 2,
          ingredient_id: 6,
          quantity: 1,
          unit_measurement: "pack"
        },
        {
          recipe_id: 3,
          ingredient_id: 1,
          quantity: 1,
          unit_measurement: "box"
        },
        { recipe_id: 3, ingredient_id: 2, quantity: 8, unit_measurement: "oz" },
        {
          recipe_id: 3,
          ingredient_id: 3,
          quantity: 1,
          unit_measurement: "pound"
        }
      ]);
    });
};
