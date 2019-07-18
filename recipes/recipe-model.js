const db = require("../data/dbConfig");

module.exports = {
    getRecipes, getShoppingList, getInstructions
};

function getRecipes() {
  return db("recipes");
}

function getShoppingList(recipe_id) {
  return db("ingredients")
  .where("recipe_id", recipe_id);
}

function getInstructions(recipe_id) {
  return db("steps")
  .where("recipe_id", recipe_id);;
}
