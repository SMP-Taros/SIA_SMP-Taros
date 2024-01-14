import asyncHandler from "express-async-handler";
import Guru from "../models/guruModels.js";

const createGuru = asyncHandler(async (req, res) => {
  try {
    let {
      nuptk,
      nama,
      jenis_kelamin,
      tempat_lahir,
      tanggal_lahir,
      nipy,
      nik,
      no_kk,
      status_kepegawaian,
      jenis_ptk,
      alamat,
      no_hp,
      email,
      sk_pengangkatan,
      tmt_pengangkatan,
      status_perkawinan,
      nama_pasangan,
      pekerjaan_pasangan,
    } = req.body;

    if (
      !nuptk ||
      !nama ||
      !jenis_kelamin ||
      !tempat_lahir ||
      !tanggal_lahir ||
      !nipy ||
      !nik ||
      !no_kk ||
      !status_kepegawaian ||
      !jenis_ptk ||
      !jenis_ptk ||
      !alamat ||
      !no_hp ||
      !email ||
      !sk_pengangkatan ||
      !tmt_pengangkatan ||
      !status_perkawinan
    ) {
      // console.log(request.body.nama)
      return res.status(400).send({
        message: "Send all required fields",
      });
    }

    let cekGuru = await Guru.findOne({ nuptk });

    if (cekGuru) {
      return res.status(400).send({
        message: "Guru sudah terdaftar",
      });
    }

    const newGuru = {
      nuptk: nuptk,
      nama: nama,
      jenis_kelamin: jenis_kelamin,
      tempat_lahir: tempat_lahir,
      tanggal_lahir: tanggal_lahir,
      nipy: nipy,
      nik: nik,
      no_kk: no_kk,
      status_kepegawaian: status_kepegawaian,
      jenis_ptk: jenis_ptk,
      alamat: alamat,
      no_hp: no_hp,
      email: email,
      sk_pengangkatan: sk_pengangkatan,
      tmt_pengangkatan: tmt_pengangkatan,
      status_perkawinan: status_perkawinan,
      nama_pasangan: nama_pasangan,
      pekerjaan_pasangan: pekerjaan_pasangan,
    };

    const guru = await Guru.create(newGuru);

    return res.status(201).json({
      message: "Guru berhasil ditambahkan",
      data: guru,
    });
  } catch (error) {
    console.log(error.massage);
    res.status(500).send({ message: error.message });
  }
});

const getGuru = asyncHandler(async (req, res) => {
  try {
    const guru = await Guru.find({});

    if (!guru) {
      return res.status(401).send("belum ada data");
    }

    const formattedData = guru.map((val) => {
      return {
        nama: val.nama,
        nuptk: val.nuptk,
        nipy: val.nipy,
        status_kepegawaian: val.status_kepegawaian,
      };
    });

    return res.status(200).json({
      count: guru.length,
      data: formattedData,
    });
  } catch (error) {
    console.log(error.massage);
    res.status(500).send({ message: error.message });
  }
});

const getdetailGuru = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const guru = await Guru.findById(id);

    if (!guru) {
      return response.status(400).send("guru tidak ditemukan");
    }

    return res.status(200).json({
      data: guru,
    });
  } catch (error) {
    console.log(error.massage);
    res.status(500).send({ message: error.message });
  }
});

const updateGuru = asyncHandler(async (req, res) => {
  try {
    let {
      nuptk,
      nama,
      jenis_kelamin,
      tempat_lahir,
      tanggal_lahir,
      nipy,
      nik,
      no_kk,
      status_kepegawaian,
      jenis_ptk,
      alamat,
      no_hp,
      email,
      sk_pengangkatan,
      tmt_pengangkatan,
      status_perkawinan,
      nama_pasangan,
      pekerjaan_pasangan,
    } = req.body;

    if (
      !nuptk &&
      !nama &&
      !jenis_kelamin &&
      !tempat_lahir &&
      !tanggal_lahir &&
      !nipy &&
      !nik &&
      !no_kk &&
      !status_kepegawaian &&
      !jenis_ptk &&
      !alamat &&
      !no_hp &&
      !email &&
      !sk_pengangkatan &&
      !tmt_pengangkatan &&
      !status_perkawinan
    ) {
      // console.log(request.body.nama)
      return res.status(400).send("tidak ada field yang terisi");
    }

    const { id } = req.params;
    const guru = await Guru.findByIdAndUpdate(id, req.body);

    if (!guru) {
      return res.status(400).json({ message: "guru tidak ditemukan" });
    }

    const newGuru = await Guru.findById(id);

    return res.status(201).json({
      message: "Guru telah diperbarui",
      data: newGuru,
    });
  } catch (error) {
    console.log(error.massage);
    res.status(500).send({ message: error.message });
  }
});

const deleteGuru = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const guru = await Guru.findByIdAndDelete(id, req.body);

    if (!guru) {
      return res.status(400).json({ message: "Guru tidak ditemukan" });
    }

    return res.status(201).send("Guru berhasil dihapus");
  } catch (error) {
    console.log(error.massage);
    res.status(500).send({ message: error.message });
  }
});

export { createGuru, getGuru, getdetailGuru, updateGuru, deleteGuru };
