import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";
import bcrypt from "bcrypt";
import "dotenv/config";
import {error_response, success_response} from "../utils/jsonResponse.js";

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
      res.status(201).json(success_response("Berhasil menambah data user", user));
    } else {
      res.status(400).send(error_response("Gagal menambah data user"));
    }

    //   res.status(201).json(user);
  } catch (err) {
    res.status(400).send(error_response(err.message));
  }
});

const loginUser = asyncHandler(async (req, res) => {
  let { username, password } = req.body;

  let user = await User.findOne({ username });
  console.log(req.headers);

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);

    res.status(200).json(success_response("Berhasil login", user));
  } else {
    res.status(401).send(error_response("username or password are wrong"));
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
  const user = await User.findById(req.userInfo._id);
  if (user) {
    res.json({"status": "success", data: user});
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

const updateUserProfile = asyncHandler(async (req, res) => {
  try {
    console.log("re1 file :", req.params);

    const { id } = req.params;
    const updateFields = { ...req.body };

    if (req.file) {
      updateFields.profil = req.file.filename;
    }

    const user = await User.findOneAndUpdate(
      { _id: id },
      { $set: updateFields }
    );

    if (user) {
      user.nama_lengkap = req.body.nama_lengkap || user.nama_lengkap;
      user.email = req.body.email || user.email;

      if (req.body.password) {
        user.password = req.body.password;
      }
      const updateFields = { ...req.body };

      if (req.file) {
        updateFields.profil = req.file.filename;
      }

      const updatedUser = await user.save();

      res.json({
status: "success",
        data: updatedUser,
        message: "Berhasil update data user"
      });
    } else {
      res.status(404).send({status: "error", message: "User tidak ditemukan"});
    }
  } catch (err) {
    res.status(400).send({status: "success", message: err.message });
  }
});

export {
  registerUser,
  loginUser,
  logoutUser,
  getuserProfile,
  updateUserProfile,
};
