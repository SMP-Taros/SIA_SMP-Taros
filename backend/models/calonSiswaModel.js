import mongoose from "mongoose";

const calonSiswaSchema = mongoose.Schema(
  {
    nama: {
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

const CalonSiswa = mongoose.model("CalonSiswa", calonSiswaSchema);

export default CalonSiswa;
