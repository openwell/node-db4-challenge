const db = require("../data/dbConfig");

module.exports = {
    getRecipes, getShoppingList, getInstructions
};

function getRecipes() {
  return db("recipe");
}

function getShoppingList(recipe_id) {
  return db("recipe");
}

function getInstructions(recipe_id) {
  return db("recipe");
}
