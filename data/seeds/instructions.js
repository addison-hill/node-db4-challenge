exports.seed = function(knex) {
  return knex("instructions")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("instructions").insert([
        {
          step_number: 1,
          step: "Cut chicken and grill for 20 min",
          recipe_id: 2
        },
        { step_number: 2, step: "Boil pasta", recipe_id: 2 },
        { step_number: 3, step: "Warm alfredo sauce", recipe_id: 2 },
        {
          step_number: 4,
          step: "Bake dinner rolls, instructions on box",
          recipe_id: 2
        },
        {
          step_number: 5,
          step: "Put pasta then alfredo and chicken and roll on plate",
          recipe_id: 2
        },
        { step_number: 1, step: "Who knows how she makes it", recipe_id: 1 },
        { step_number: 1, step: "boil pasta", recipe_id: 3 },
        {
          step_number: 2,
          step: "cook hamburger meat put in marinara put on top of pasta",
          recipe_id: 3
        }
      ]);
    });
};
