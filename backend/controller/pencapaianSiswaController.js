import pencapaianSiswa from "../models/pencapaianSiswaModel.js";
import Siswa from "../models/siswaModel.js";
import asyncHandler from "express-async-handler";
import { ObjectId } from "mongoose";

const createPencapaianSiswa = asyncHandler(async (req, res) => {
  try {
    let {
      siswa_id,
      membaca_alquran,
      jumlah_hafalan,
      hobby,
      cita_cita,
      prestasi,
    } = req.body;

    const newPencapaianSiswa = {
      siswa_id: siswa_id,
      membaca_alquran: membaca_alquran,
      jumlah_hafalan: jumlah_hafalan,
      hobby: hobby,
      cita_cita: cita_cita,
      prestasi: prestasi,
    };

    const PencapaianSiswa = await pencapaianSiswa.create(newPencapaianSiswa);

    return res.status(201).json({
      message: "data kesehatan siswa berhasil ditambahkan",
      data: PencapaianSiswa,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

const getPencapaianSiswa = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const PencapaianSiswa = await pencapaianSiswa.findOne({
      siswa_id: id,
    });

    if (!PencapaianSiswa) {
      return res.status(401).send("siswa tidak ditemukan");
    }
    // console.log(req);

    return res.status(200).json({
      data: PencapaianSiswa,
    });
  } catch (error) {
    console.log(error.massage);
    res.status(500).send({ message: error.message });
  }
});

const updatePencapaianSiswa = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;

    if (!req.body) {
      return res.status(400).send({
        message: "tidak ada kolom yang terisi",
      });
    }

    const PencapaianSiswa = await pencapaianSiswa.findOneAndUpdate(
      { siswa_id: id },
      req.body
    );
    if (!PencapaianSiswa) {
      return res.status(400).send({
        message: "id tidak terdaftar",
      });
    }

    return res.status(201).json({
      message: "data pencapaian siswa berhasil diupdate",
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

export { createPencapaianSiswa, getPencapaianSiswa, updatePencapaianSiswa };
