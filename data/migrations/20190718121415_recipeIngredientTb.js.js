exports.up = function(knex) {
  return knex.schema
    .createTable("recipes", tbl => {
      tbl.increments();
      tbl
        .string("recipe_name", 255)
        .unique()
        .notNullable();
    })
    .createTable("ingredients", tbl => {
      tbl.increments();
      tbl
        .string("ingredient_name", 255)
        .unique()
        .notNullable();
      tbl
        .float("ingredient_quantity", 11)
        .notNullable();
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("steps", tbl => {
      tbl.increments();
      tbl
        .string("step_desc", 255)
        .notNullable();
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("steps")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};

// tbl
// .integer("ingredients-id")
// .unsigned()
// .notNullable()
// .references("id")
// .inTable("ingredients");
// tbl
// .integer("steps_id")
// .unsigned()
// .notNullable()
// .references("id")
// .inTable("steps");
