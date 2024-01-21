import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";
import bcrypt from "bcrypt";
import "dotenv/config";

const registerUser = asyncHandler(async (req, res) => {
  //   const errorResult = validationResult(req);

  //   if (!errorResult) {
  //     return res.status(400).json({ errors: errors.array() });
  //   }

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
});

const loginUser = asyncHandler(async (req, res) => {
  let { username, password } = req.body;

  let user = await User.findOne({ username });

  if (user && (await user.matchPassword(password))) {
    console.log(process.env.JWT_SECRET);
    generateToken(res, user._id);

    res.status(201).json({
      _id: user._id,
      username: user.username,
      email: user.email,
    });
  } else {
    res.status(401);
    throw new Error("username or password are wrong");
  }
  //   res.status(201).json(user);
});

const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });

  res.status(200).json({ msg: "user logged out" });
});

const getuserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    res.json({
      username: user.username,
      nama_lengkap: user.nama_lengkap,
      email: user.email,
      niptk: user.niptk,
      nomor_telepon: user.nomor_telepon,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

export { registerUser, loginUser, logoutUser, getuserProfile };
