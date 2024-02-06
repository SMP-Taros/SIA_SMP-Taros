import express from "express";
// import { User } from "../models/userModel.js";
import bcrypt from "bcrypt";
// import { check, validationResult } from "express-validator";
import generateToken from "../utils/generateToken.js";

import { protect } from "../middleware/authMiddleware.js";
import { upload } from "../utils/uploadImage.js";

import {
  loginUser,
  logoutUser,
  registerUser,
  getuserProfile,
  updateUserProfile
} from "../controller/userController.js";

// import authMiddleware from "../middleware/auth.js";

const router = express.Router();

// router.get("/current", authMiddleware, async (req, res) => {
//   try {
//     const users = await User.find();

//     res.json(users);
//   } catch (err) {
//     console.error(err.message);

//     res.status(500).send("Server Error");
//   }
// });

router.post("/", loginUser);
router.post("/register", registerUser);
router.post("/logout", logoutUser);

router.route("/profile", upload.single("file")).get(getuserProfile).put(updateUserProfile);
// router.patch("/current", authMiddleware, async (req, res) => {
//   try {
//     const { username, nama_lengkap, email, niptk, nomor_telepon, password } =
//       req.body;

//     const user = await User.findById(req.user.id);

//     if (!user) {
//       return res.status(404).json({ msg: "user not found" });
//     }

//     user.username = username;
//     user.nama_lengkap = nama_lengkap;
//     user.email = email;
//     user.niptk = niptk;
//     user.nomor_telepon = nomor_telepon;
//     user.password = password;

//     const updatedUser = await user.save();

//     res.json(updatedUserUser);
//   } catch (err) {
//     console.error(err.message);

//     res.status(500).send("Server Error");
//   }
// });

export default router;
