const express = require("express");
const db = require("../data/config");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    res.json(await db("resources"));
  } catch (err) {
    next(err);
  }
});

module.exports = router;
