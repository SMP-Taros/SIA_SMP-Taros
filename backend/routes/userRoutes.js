import express from "express";
import { User } from "../models/userModel.js";
import bcrypt from "bcrypt";

import { check, validationResult } from "express-validator";

import generateToken from "../utils/generateToken.js";

import authMiddleware from "../middleware/auth.js";

const router = express.Router();

router.get("/current", authMiddleware, async (req, res) => {
  try {
    const users = await User.find();

    res.json(users);
  } catch (err) {
    console.error(err.message);

    res.status(500).send("Server Error");
  }
});

router.post(
  "/",
  [
    [
      check("username", "username is required").not().isEmpty(),
      check("nama_lengkap", "nama lengkap is required").not().isEmpty(),
      check("email", "email is not valid").isEmail(),
      check("niptk", "niptk is required").not().isEmpty(),
      check("nomor_telepon", "nomor telepon is required").not().isEmpty(),
      check(
        "password",
        "Please enter a password with 6 or more characters"
      ).isLength({ min: 6 }),
    ],
  ],
  async (req, res) => {
    const errorResult = validationResult(req);

    if (!errorResult) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      let { username, nama_lengkap, email, niptk, nomor_telepon, password } =
        req.body;

      let userUsername = await User.findOne({ username });
      if (userUsername) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Username already exists" }] });
      }
      const userEmail = await User.findOne({ email });
      if (userEmail) {
        return res
          .status(400)
          .json({ errors: [{ msg: "email already exists" }] });
      }

      password = await bcrypt.hash(password, 10);

      const user = await User.create({
        username,
        nama_lengkap,
        email,
        niptk,
        nomor_telepon,
        password,
      });

      if (user) {
        generateToken(res, user._id);

        res.status(201).json({
          _id: user._id,
          name: user.name,
          email: user.email,
        });
      } else {
        res.status(400);
        throw new Error("Invalid user data");
      }

      //   res.status(201).json(user);
    } catch (err) {
      console.error(err.message);

      res.status(500).send("Server Error");
    }
  }
);
router.patch("/current", authMiddleware, async (req, res) => {
  try {
    const { username, nama_lengkap, email, niptk, nomor_telepon, password } =
      req.body;

    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({ msg: "user not found" });
    }

    user.username = username;
    user.nama_lengkap = nama_lengkap;
    user.email = email;
    user.niptk = niptk;
    user.nomor_telepon = nomor_telepon;
    user.password = password;

    const updatedUser = await user.save();

    res.json(updatedUserUser);
  } catch (err) {
    console.error(err.message);

    res.status(500).send("Server Error");
  }
});

export default router;
