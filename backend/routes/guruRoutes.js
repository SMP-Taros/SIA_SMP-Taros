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

//get siswa
router.get("/", protect, getGuru);

router.get("/:id", protect, getdetailGuru);

router.put("/:id", protect, updateGuru);

router.delete("/:id", protect, deleteGuru);

export default router;
