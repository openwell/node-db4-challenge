exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("steps")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("steps").insert([
        {
          step_desc:
            "Place sausage in a large, deep skillet. Cook over medium high heat until evenly brown. Drain, reserving 2 tablespoons drippings; set sausage aside. Preheat oven to 350 degrees F (175 degrees C).",
          recipe_id: 1
        },
        {
          step_desc: "Add the eggs and green chiles to the skillet; cook, stirring occasionally, until eggs are scrambled and set.",
          recipe_id: 1
        },
        {
          step_desc: "Lightly grease a 9x13 inch baking pan. Place the tortillas on a counter top or other clean surface. Cover each tortillas with portions on sausage, cheese and eggs. Roll up the tortillas and place them seam side down in the baking dish.",
          recipe_id: 1
        },
        {
          step_desc: "Heat reserved sausage drippings in the skillet. Sprinkle on the flour and stir. Add milk, stirring constantly, until the gravy begins to thicken. Pour the gravy on top of the tortilla rolls.",
          recipe_id: 1
        },
        {
          step_desc: "Bake in preheated oven for 10 to 15 minutes, until gravy is bubbly.",
          recipe_id: 1
        }
      ]);
    });
};
