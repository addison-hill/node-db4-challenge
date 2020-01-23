exports.seed = function(knex) {
  return knex("recipes")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        { name: "Chicken Casserole", author: "Grandma" },
        { name: "Chicken Alfredo", author: "Addison" },
        { name: "Spaghetti", author: "Grandpa" }
      ]);
    });
};
