const express = require("express");
const db = require("./recipe-model");

const router = express.Router();

router.get("/", (req, res) => {
  try {
    db.getRecipes().then(data => {
      return res.status(200).json({
        data: data
      });
    });
  } catch (err) {
    return res.status(500).send(err);
  }
});
router.get("/:id/shoppingList", (req, res) => {
  try {
    db.getShoppingList(req.params.id).then(data => {
      return res.status(200).json({
        data: data
      });
    });
  } catch (err) {
    return res.status(500).send(err);
  }
});
router.get("/:id/instructions", (req, res) => {
  try {
    db.getInstructions(req.params.id).then(data => {
      return res.status(200).json({
        data: data
      });
    });
  } catch (err) {
    return res.status(500).send(err);
  }
});


module.exports = router;