const express = require("express");
// const projectModel = require("../models/project-model");
const db = require("../data/config");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    res.json(await db("projects"));
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const project = await db("projects").where("id", req.params.id).first();

    if (!project) {
      return res.status(404).json({
        message: "project not found",
      });
    }

    res.json(project);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    await db("projects").insert(req.body);
    res.status(201).json(req.body);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
