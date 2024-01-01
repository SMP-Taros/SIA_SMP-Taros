import { check, validationResult } from "express-validator";

export const userVal = [
  check("username", "username is required").not().isEmpty(),
  check("nama_lengkap", "nama lengkap is required").not().isEmpty(),
  check("email", "email is not valid").isEmail(),
  check("niptk", "niptk is required").not().isEmpty(),
  check("nomor_telepon", "nomor telepon is required").not().isEmpty(),
  check(
    "password",
    "Please enter a password with 6 or more characters"
  ).isLength({ min: 6 }),
];
