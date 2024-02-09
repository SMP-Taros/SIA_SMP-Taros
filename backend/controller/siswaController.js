import KesehatanSiswa from "../models/kesehatanSiswaModel.js";
import OrangTuaSiswa from "../models/orangTuaSiswaModel.js";
import PencapaianSiswa from "../models/pencapaianSiswaModel.js";
import Siswa from "../models/siswaModel.js";
import asyncHandler from "express-async-handler";

const createSiswa = asyncHandler(async (req, res) => {
  try {
    let {
      nama,
      jenis_kelamin,
      nisn,
      tempat_lahir,
      tanggal_lahir,
      nik,
      agama,
      status,
      anak_ke,
      jumlah_saudara_kandung,
      status_anak,
      alamat,
      jarak_rumah_sekolah,
      asal_sekolah,
      alamat_asal_sekolah,
    } = req.body;

    if (
      !nama ||
      !jenis_kelamin ||
      !nisn ||
      !tempat_lahir ||
      !tanggal_lahir ||
      !nik ||
      !agama ||
      !status ||
      !anak_ke ||
      !jumlah_saudara_kandung ||
      !alamat ||
      !jarak_rumah_sekolah ||
      !asal_sekolah ||
      !alamat_asal_sekolah
    ) {
      // console.log(request.body.nama)
      return res.status(400).send({
        status: "fail",
        message: "Send all required fields",
      });
    }

    const newSiswa = {
      nama: nama,
      jenis_kelamin: jenis_kelamin,
      nisn: nisn,
      tempat_lahir: tempat_lahir,
      tanggal_lahir: tanggal_lahir,
      nik: nik,
      agama: agama,
      status: status,
      anak_ke: anak_ke,
      jumlah_saudara_kandung: jumlah_saudara_kandung,
      status_anak: status_anak,
      alamat: alamat,
      jarak_rumah_sekolah: jarak_rumah_sekolah,
      asal_sekolah: asal_sekolah,
      alamat_asal_sekolah: alamat_asal_sekolah,
    };

    const siswa = await Siswa.create(newSiswa);

    return res.status(201).send({
      status: "success",
      message: "siswa berhasil ditambahkan",
      data: siswa,
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.message,
    });
  }
});

const getSiswa = asyncHandler(async (req, res) => {
  try {
    const siswa = await Siswa.find({});

    const formattedData = siswa.map((val) => {
      return val;
    });

    return res.status(200).json({
      status: "success",
      data: formattedData,
    });
  } catch (error) {
    console.log(error.massage);
    res.status(500).send({
      status: "error",
      message: error.message,
    });
  }
});

const getdetailSiswa = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const siswa = await Siswa.findOne({ nisn: id });

    if (!siswa) {
      return res.status(401).send({
        status: "fail",
        message: "siswa tidak ditemukan",
      });
    }

    return res.status(200).send({
      status: "success",
      data: siswa,
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.message,
    });
  }
});
const updateSiswa = asyncHandler(async (req, res) => {
  try {
    let {
      nama,
      nis,
      jenis_kelamin,
      nisn,
      tempat_lahir,
      tanggal_lahir,
      nik,
      agama,
      status,
      anak_ke,
      jumlah_saudara_kandung,
      status_anak,
      alamat,
      jarak_rumah_sekolah,
      asal_sekolah,
      alamat_asal_sekolah,
    } = req.body;

    console.log(req.file);

    if (!req.body) {
      // console.log(request.body.nama)
      return res.status(400).send({
        status: "fail",
        message: "tidak ada field yang terisi",
      });
    }

    const { id } = req.params;
    const updateFields = { ...req.body };

    if (req.file) {
      updateFields.profil = req.file.filename;
    }

    const siswa = await Siswa.findOneAndUpdate(
      { nisn: id },
      { $set: updateFields }
    );

    if (!siswa) {
      return res.status(400).send({
        status: "fail",
        message: "Siswa tidak ditemukan",
      });
    }

    return res.status(201).send({
      status: "success",
      message: "siswa berhasil di update",
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.message,
    });
  }
});

const deleteSiswa = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const siswa = await Siswa.findOneAndDelete(id);
    const kesehatanSiswa = await KesehatanSiswa.findOneAndDelete(id);
    const pencapaianSiswa = await PencapaianSiswa.findOneAndDelete(id);
    const orangtuaSiswa = await OrangTuaSiswa.findOneAndDelete(id);

    if (!siswa) {
      return res.status(401).send({
        status: "fail",
        message: "Siswa tidak ditemukan",
      });
    }
    return res.status(201).send("Siswa deleted");
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.message,
    });
  }
});

export { createSiswa, getSiswa, getdetailSiswa, updateSiswa, deleteSiswa };
