import KesehatanSiswa from "../models/kesehatanSiswaModel.js";
import Siswa from "../models/siswaModel.js";
import asyncHandler from "express-async-handler";
import { ObjectId } from "mongoose";

const createKesehatanSiswa = asyncHandler(async (req, res) => {
  try {
    let {
      siswa_id,
      golongan_darah,
      penyakit_pernah_diderita,
      kelainan_jasmani,
      berat_badan,
      tinggi_badan,
    } = req.body;

    const newKesehatanSiswa = {
      siswa_id: siswa_id,
      golongan_darah: golongan_darah,
      penyakit_pernah_diderita: penyakit_pernah_diderita,
      kelainan_jasmani: kelainan_jasmani,
      berat_badan: berat_badan,
      tinggi_badan: tinggi_badan,
    };

    const kesehatanSiswa = await KesehatanSiswa.create(newKesehatanSiswa);

    return res.status(201).send({
      status: "success",
      message: "Data kesehatan siswa berhasil ditambahkan",
      data: kesehatanSiswa,
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.message,
    });
  }
});

const getKesehatanSiswa = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const kesehatanSiswa = await KesehatanSiswa.findOne({
      siswa_id: id,
    });

    if (!kesehatanSiswa) {
      return res.status(401).json({
        status: "fail",
        message: "Siswa tidak ditemukan",
      });
    }
    // console.log(req);

    return res.status(200).json({
      status: "success",
      data: kesehatanSiswa,
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.message,
    });
  }
});

const updateKesehatanSiswa = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;

    if (!req.body) {
      return res.status(400).send({
        error: "fail",
        message: "tidak ada kolom yang terisi",
      });
    }

    const kesehatanSiswa = await KesehatanSiswa.findOneAndUpdate(
      { siswa_id: id },
      req.body
    );
    if (!kesehatanSiswa) {
      return res.status(400).send({
        status: "fail",
        message: "id tidak terdaftar",
      });
    }

    return res.status(201).send({
      status: "success",
      message: "data kesehatan siswa berhasil diupdate",
      data: kesehatanSiswa,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
});

export { createKesehatanSiswa, getKesehatanSiswa, updateKesehatanSiswa };
