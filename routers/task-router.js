const express = require("express");
const db = require("../data/config");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    res.json(await db("tasks"));
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    await db("tasks").insert(req.body);
    res.status(201).json(req.body);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
