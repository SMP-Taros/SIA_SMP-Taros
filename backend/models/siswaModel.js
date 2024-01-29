import mongoose from "mongoose";

const siswaSchema = mongoose.Schema(
  {
    nama: {
      type: String,
      required: true,
    },
    nis: {
      type: Number,
      unique: true,
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

siswaSchema.pre("save", async function (next) {
  const doc = this;
  // Gunakan Model untuk mendapatkan nilai auto-increment
  // console.log("tes middleware");
  try {
    // Gunakan Model untuk mendapatkan nilai auto-increment
    const lastDoc = await mongoose.model("Siswa").findOne().sort("-nis").exec();
    console.log(lastDoc);

    // Tentukan nilai auto-increment untuk dokumen saat ini
    doc.nis = (lastDoc ? lastDoc.nis : 1) + 1;
    next();
  } catch (err) {
    return next(err);
  }
});

const Siswa = mongoose.model("Siswa", siswaSchema);

export default Siswa;
