import mongoose from "mongoose";

const pencapaianSiswaSchema = mongoose.Schema(
  {
    siswa_id: {
      type: String,
      required: true,
      ref: "Siswa",
    },
    membaca_alquran: {
      type: String,
      required: true,
    },
    jumlah_hafalan: {
      type: String,
      required: true,
    },
    hobby: {
      type: String,
      required: true,
    },
    cita_cita: {
      type: String,
      required: true,
    },
    prestasi: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const PencapaianSiswa = mongoose.model(
  "pencapaianSiswa",
  pencapaianSiswaSchema
);

export default PencapaianSiswa;
