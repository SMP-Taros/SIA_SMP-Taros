import express from "express";
import {
  createCalonSiswa,
  getCalonSiswa,
  getDetailCalonSiswa,
  deleteCalonSiswa,
  confirmCalonSiswa,
} from "../controller/calonSiswaController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createCalonSiswa);
router.post("/confirm", confirmCalonSiswa);

//get siswa
router.get("/", getCalonSiswa);

router.get("/:id", getDetailCalonSiswa);

router.delete("/:id", deleteCalonSiswa);

export default router;
