import Siswa from "../models/siswaModel.js";
import asyncHandler from "express-async-handler";

const createSiswa = asyncHandler(async (req, res) => {
  try {
    let {
      nama,
      nis,
      jenis_kelamin,
      nisn,
      tempat_lahir,
      tanggal_lahir,
      nik,
      alamat,
      email,
      nama_ayah,
      pekerjaan_ayah,
      nama_ibu,
      pekerjaan_ibu,
    } = req.body;

    if (
      !nama ||
      !nis ||
      !jenis_kelamin ||
      !nisn ||
      !tempat_lahir ||
      !tanggal_lahir ||
      !nik ||
      !alamat ||
      !email ||
      !nama_ayah ||
      !pekerjaan_ayah ||
      !nama_ibu ||
      !pekerjaan_ibu
    ) {
      // console.log(request.body.nama)
      return res.status(400).send({
        message: "Send all required fields",
      });
    }

    let cekSiswa = await Siswa.findOne({ nis });

    if (cekSiswa) {
      return res.status(400).send({
        message: "Siswa sudah terdaftar",
      });
    }
    const newSiswa = {
      nama: nama,
      nis: nis,
      jenis_kelamin: jenis_kelamin,
      nisn: nisn,
      tempat_lahir: tempat_lahir,
      tanggal_lahir: tanggal_lahir,
      nik: nik,
      alamat: alamat,
      email: email,
      nama_ayah: nama_ayah,
      pekerjaan_ayah: pekerjaan_ayah,
      nama_ibu: nama_ibu,
      pekerjaan_ibu: pekerjaan_ibu,
    };

    const siswa = await Siswa.create(newSiswa);

    return res.status(201).send(siswa);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

const getSiswa = asyncHandler(async (req, res) => {
  try {
    const siswa = await Siswa.find({});

    return res.status(200).json({
      count: siswa.length,
      data: siswa,
    });
  } catch (error) {
    console.log(error.massage);
    res.status(500).send({ message: error.message });
  }
});
const getdetailSiswa = asyncHandler(async (req, res) => {});
const updateSiswa = asyncHandler(async (req, res) => {});
const deleteSiswa = asyncHandler(async (req, res) => {});

export { createSiswa, getSiswa, getdetailSiswa, updateSiswa, deleteSiswa };
