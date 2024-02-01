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

    return res.status(201).json({
      message: "siswa berhasil ditambahkan",
      data: siswa,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

const getSiswa = asyncHandler(async (req, res) => {
  try {
    const siswa = await Siswa.find({});

    const formattedData = siswa.map((val) => {
      return {
        id: val._id,
        nama: val.nama,
        nis: val.nis,
        nisn: val.nisn,
      };
    });

    return res.status(200).json({
      count: siswa.length,
      data: formattedData,
    });
  } catch (error) {
    console.log(error.massage);
    res.status(500).send({ message: error.message });
  }
});

const getdetailSiswa = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const siswa = await Siswa.findOne({ nisn: id });

    if (!siswa) {
      return res.status(401).send("siswa tidak ditemukan");
    }

    return res.status(200).json({
      data: siswa,
    });
  } catch (error) {
    console.log(req.params);
    // console.log(error.massage);
    res.status(500).send({ message: error.message });
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
      return res.status(400).send("none of your fields have been filled");
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
      return res.status(400).json({ message: "Siswa not found" });
    }

    // const newSiswa = Siswa.findById(id);

    return res.status(201).json({
      message: "siswa berhasil di update",
    });
  } catch (error) {
    console.log(error.massage);
    res.status(500).send({ message: error.message });
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
      return res.status(401).json({ message: "Siswa not found" });
    }

    return res.status(201).send("Siswa deleted");
  } catch (error) {
    console.log(error.massage);
    res.status(500).send({ message: error.message });
  }
});

export { createSiswa, getSiswa, getdetailSiswa, updateSiswa, deleteSiswa };
