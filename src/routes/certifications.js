import { Router } from "express";
import certifications from "../data/certifications.js";

const router = Router();

router.get("/", (req, res) => {
  res.json({ certifications });
});

export default router;
