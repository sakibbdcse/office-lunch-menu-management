const express = require("express");
const {
  addMenuOption,
  getMenuByDate,
} = require("../controllers/menuController");
const router = express.Router();

router.post("/menu", addMenuOption);
router.get("/menu/:date", getMenuByDate);

module.exports = router;
