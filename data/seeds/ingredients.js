exports.seed = function(knex) {
  return knex("ingredients")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { name: "Pasta" },
        { name: "Marinara Sauce" },
        { name: "Hamburger Meat" },
        { name: "Chicken Breast" },
        { name: "Alfredo Sauce" },
        { name: "Dinner Rolls" },
        { name: "Sour Cream" },
        { name: "Ritz Crackers" }
      ]);
    });
};
