import express from "express";
import {
  createPencapaianSiswa,
  getPencapaianSiswa,
  updatePencapaianSiswa,
} from "../controller/pencapaianSiswaController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createPencapaianSiswa);

//get siswa
router.get("/:id", getPencapaianSiswa);

router.put("/:id", updatePencapaianSiswa);

export default router;
