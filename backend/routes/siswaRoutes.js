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
router.get("/", protect, getSiswa);

router.get("/:id", protect, getdetailSiswa);

router.put("/:id", protect, updateSiswa);

router.delete("/:id", protect, deleteSiswa);

export default router;
