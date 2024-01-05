import mongoose from "mongoose";

const guruSchema = mongoose.Schema(
  {
    nuptk: {
      type: String,
      required: true,
    },
    nama: {
      type: String,
      required: true,
    },
    jenis_kelamin: {
      type: String,
      enum: ["Laki-Laki", "Perempuan"],
      required: true,
    },

    tempat_lahir: {
      type: String,
      required: true,
    },
    tanggal_lahir: {
      type: Date,
      required: true,
    },
    nipy: {
      type: String,
      required: true,
    },
    nik: {
      type: String,
      required: true,
    },
    no_kk: {
      type: String,
      required: true,
    },
    status_kepegawaian: {
      type: String,
      enum: ["PNS", "Honorer", "Magang"],
      required: true,
    },
    jenis_ptk: {
      type: String,
      enum: ["PNS", "Honorer", "Magang"],
      required: true,
    },
    alamat: {
      type: String,
      required: true,
    },
    no_hp: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    sk_pengangkatan: {
      type: String,
      required: true,
    },
    tmt_pengangkatan: {
      type: String,
      required: true,
    },
    status_perkawinan: {
      type: String,
      enum: ["Menikah", "Lajang"],
      required: true,
    },
    nama_pasangan: {
      type: String,
    },
    pekerjaan_pasangan: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Guru = mongoose.model("Guru", guruSchema);

export default Guru;
