exports.seed = function(knex) {
  return knex("recipe_ingredients")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("recipe_ingredients").insert([{}, {}, {}]);
    });
};
