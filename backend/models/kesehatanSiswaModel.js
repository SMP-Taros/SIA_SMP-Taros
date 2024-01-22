import mongoose from "mongoose";

const kesehatanSiswaSchema = mongoose.Schema(
  {
    nis: {
      type: String,
      required: true,
    },
    nisn: {
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
    nik: {
      type: String,
      required: true,
    },
    alamat: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    nama_ayah: {
      type: String,
      required: true,
    },
    pekerjaan_ayah: {
      type: String,
      required: true,
    },
    nama_ibu: {
      type: String,
      required: true,
    },
    pekerjaan_ibu: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const KesehatanSiswa = mongoose.model(
  "KesehatanSiswa",
  kesehatanSiswaSchemaSchema
);

export default Siswa;
