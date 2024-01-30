import mongoose from "mongoose";

const kesehatanSiswaSchema = mongoose.Schema(
  {
    siswa_id: {
      type: String,
      required: true,
      ref: "Siswa",
    },
    golongan_darah: {
      type: String,
      required: true,
    },
    penyakit_pernah_diderita: {
      type: String,
      required: true,
    },
    kelainan_jasmani: {
      type: String,
      required: true,
    },
    berat_badan: {
      type: String,
      required: true,
    },
    tinggi_badan: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const KesehatanSiswa = mongoose.model("KesehatanSiswa", kesehatanSiswaSchema);

export default KesehatanSiswa;
