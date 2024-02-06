import bcrypt from "bcryptjs";

const users = [
  {
    username: "admin",
    email: "admin@email.com",
    nama_lengkap: "ammar",
    niptk: 121312,
    nomor_telepon: "0892922",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
