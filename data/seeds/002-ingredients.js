exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        {
          ingredient_name: "ground pork sausage",
          ingredient_quantity: 2,
          recipe_id: 1
        },
        {
          ingredient_name: "eggs, beaten",
          ingredient_quantity: 12,
          recipe_id: 1
        },
        {
          ingredient_name: "cup milk",
          ingredient_quantity: 1,
          recipe_id: 1
        },
        {
          ingredient_name: "Cheddar cheese, shredded",
          ingredient_quantity: 8,
          recipe_id: 1
        },
        {
          ingredient_name: "(10 inch) flour tortillas, shredded",
          ingredient_quantity: 8,
          recipe_id: 1
        }
      ]);
    });
};
