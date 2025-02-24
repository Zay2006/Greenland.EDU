import express from "express";
import Major from "../models/Major.js";
import Minor from "../models/Minor.js";
import Course from "../models/Course.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const majors = await Major.findAll({ include: Course });
  const minors = await Minor.findAll({ include: Course });
  res.render("majorsMinors", { majors, minors });
});

router.post("/add-major", async (req, res) => {
  const { name } = req.body;
  await Major.create({ name });
  res.redirect("/majors-minors");
});

router.post("/add-minor", async (req, res) => {
  const { name } = req.body;
  await Minor.create({ name });
  res.redirect("/majors-minors");
});

router.post("/add-course", async (req, res) => {
  const { name, majorId, minorId } = req.body;
  await Course.create({ name, MajorId: majorId, MinorId: minorId });
  res.redirect("/majors-minors");
});

export default router;