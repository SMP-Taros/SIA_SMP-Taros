import express from "express";
import Guru from "../models/guruModels.js";
import { protect } from "../middleware/authMiddleware.js";
import {
  createGuru,
  getGuru,
  getdetailGuru,
  updateGuru,
  deleteGuru,
} from "../controller/guruController.js";

const router = express.Router();

router.post("/", protect, createGuru);

//get guru
router.get("/", getGuru);

router.get("/:id", getdetailGuru);

router.put("/:id", updateGuru);

router.delete("/:id", deleteGuru);

export default router;
