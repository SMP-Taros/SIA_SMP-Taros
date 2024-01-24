import express from "express";
import {
  createSiswa,
  deleteSiswa,
  getSiswa,
  getdetailSiswa,
  updateSiswa,
} from "../controller/siswaController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createSiswa);

//get siswa
router.get("/", getSiswa);

router.get("/:id", getdetailSiswa);

router.put("/:id", protect, updateSiswa);

router.delete("/:id", protect, deleteSiswa);

export default router;
