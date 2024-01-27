import express from "express";
import {
  createOrangTuaSiswa,
  getOrangTuaSiswa,
  updateOrangTuaSiswa,
} from "../controller/orangTuaSiswaController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createOrangTuaSiswa);

//get siswa
router.get("/:id", getOrangTuaSiswa);

router.put("/:id", protect, updateOrangTuaSiswa);

export default router;
