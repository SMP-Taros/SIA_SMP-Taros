import express from "express";
import {
  createSiswa,
  deleteSiswa,
  getSiswa,
  getdetailSiswa,
  updateSiswa,
} from "../controller/siswaController.js";
import { protect } from "../middleware/authMiddleware.js";
import { upload } from "../utils/uploadImage.js";

const router = express.Router();

router.post("/", protect, createSiswa);

//get siswa
router.get("/", getSiswa);

router.get("/:id", getdetailSiswa);

router.put("/:id", upload.single("file"), updateSiswa);

router.delete("/:id", deleteSiswa);

export default router;
