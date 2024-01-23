import mongoose from "mongoose";

const orangTuaSiswaSchema = mongoose.Schema(
  {
    siswa_id: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "Siswa",
    },
    nama_ayah: {
      type: String,
      required: true,
    },
    nik_ayah: {
      type: String,
      required: true,
    },
    tahun_lahir_ayah: {
      type: Date,
      required: true,
    },
    pendidikan_terakhir_ayah: {
      type: String,
    },
    pekerjaan_ayah: {
      type: String,
    },
    nama_instansi_kerja_ayah: {
      type: String,
    },
    jabatan_ayah: {
      type: String,
    },
    penghasilan_perbulan_ayah: {
      type: Number,
      required: true,
    },
    keberadaan_ayah: {
      type: String,
      required: true,
    },
    nama_ibu: {
      type: String,
      required: true,
    },
    nik_ibu: {
      type: String,
      required: true,
    },
    tahun_lahir_ibu: {
      type: Date,
      required: true,
    },
    pendidikan_teakhir_ibu: {
      type: String,
    },
    pekerjaan_ibu: {
      type: String,
    },
    nama_instansi_kerja_ibu: {
      type: String,
    },
    jabatan_ibu: {
      type: String,
    },
    penghasilan_perbulan_ibu: {
      type: String,
      required: true,
    },
    keberadaan_ibu: {
      type: String,
    },
    email: {
      type: String,
    },
    no_hp: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const orangTuaSiswa = mongoose.model("orangTuaSiswa", orangTuaSiswaSchema);

export default orangTuaSiswa;
