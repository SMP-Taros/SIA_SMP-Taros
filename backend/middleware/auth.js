import express from "express";

import bcrypt from "bcrypt";

import jwt from "jsonwebtoken";

import config from "../app/config.js";

import { User } from "../models/userModel.js";

import { check, validationResult } from "express-validator";

import "dotenv/config";

const router = express.Router();

router.post(
  "/login",
  [
    check("username", "username are required").exists(),
    check("password", "password are required").exists(),
  ],
  async (req, res) => {
    const errorResult = validationResult(req);

    if (!errorResult) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, password } = req.body;

    try {
      let user = User.findByOne({ username });

      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid credentials" }] });
      }

      let isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid credentials" }] });
      }

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.log(err.message);
      res.status(500).send("server error");
    }
  }
);

export default router;
