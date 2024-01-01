import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },

    nama_lengkap: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    niptk: {
      type: Number,
      required: true,
    },
    nomor_telepon: {
      type: Number,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model("User", userSchema);

export default User;
