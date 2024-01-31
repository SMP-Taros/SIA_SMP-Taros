import express from "express";
import {
  getKesehatanSiswa,
  createKesehatanSiswa,
  updateKesehatanSiswa,
} from "../controller/kesehatanSiswaController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createKesehatanSiswa);

//get siswa
router.get("/:id", getKesehatanSiswa);

router.put("/:id", updateKesehatanSiswa);

export default router;
