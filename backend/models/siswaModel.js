import mongoose from "mongoose";


const siswaSchema = mongoose.Schema(
  {
    nama: {
      type: String,
      required: true,
    },
    nis: {
      type: String,
      required: true,
    },
    jenis_kelamin: {
      type: String,
      enum: ["Laki-Laki", "Perempuan"],
      required: true,
    },
    nisn: {
      type: String,
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
    agama: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["Anak Kandung", "Anak Angkat"],
      required: true,
    },
    anak_ke: {
      type: String,
      required: true,
    },
    jumlah_saudara_kandung: {
      type: Number,
      required: true,
    },
    status_anak: {
      type: String,
      enum: ["Yatim", "Yatim Piatu", "Piatu"],
    },
    alamat: {
      type: String,
      required: true,
    },
    jarak_rumah_sekolah: {
      type: String,
      required: true,
    },
    asal_sekolah: {
      type: String,
      required: true,
    },
    alamat_asal_sekolah: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Siswa = mongoose.model("Siswa", siswaSchema);

export default Siswa;
