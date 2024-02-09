import orangTuaSiswa from "../models/orangTuaSiswaModel.js";
import asyncHandler from "express-async-handler";

const createOrangTuaSiswa = asyncHandler(async (req, res) => {
  try {
    let {
      siswa_id,
      nama_ayah,
      nik_ayah,
      tahun_lahir_ayah,
      pendidikan_terakhir_ayah,
      pekerjaan_ayah,
      nama_instansi_kerja_ayah,
      jabatan_ayah,
      penghasilan_perbulan_ayah,
      keberadaan_ayah,
      nama_ibu,
      nik_ibu,
      tahun_lahir_ibu,
      pendidikan_terakhir_ibu,
      pekerjaan_ibu,
      nama_instansi_kerja_ibu,
      jabatan_ibu,
      penghasilan_perbulan_ibu,
      keberadaan_ibu,
      email,
      no_hp,
    } = req.body;

    if (
      !nama_ayah ||
      !nik_ayah ||
      !tahun_lahir_ayah ||
      !penghasilan_perbulan_ayah ||
      !nama_ibu ||
      !nik_ibu ||
      !tahun_lahir_ibu ||
      !penghasilan_perbulan_ibu
    ) {
      return res.status(401).send({
        status: "fail",
        message: "data tidak lengkap",
      });
    }

    const newOrangTuaSiswa = {
      siswa_id: siswa_id,
      nama_ayah: nama_ayah,
      nik_ayah: nik_ayah,
      tahun_lahir_ayah: tahun_lahir_ayah,
      pendidikan_terakhir_ayah: pendidikan_terakhir_ayah,
      pekerjaan_ayah: pekerjaan_ayah,
      nama_instansi_kerja_ayah: nama_instansi_kerja_ayah,
      jabatan_ayah: jabatan_ayah,
      penghasilan_perbulan_ayah: penghasilan_perbulan_ayah,
      keberadaan_ayah: keberadaan_ayah,
      nama_ibu: nama_ibu,
      nik_ibu: nik_ibu,
      tahun_lahir_ibu: tahun_lahir_ibu,
      pendidikan_terakhir_ibu: pendidikan_terakhir_ibu,
      pekerjaan_ibu: pekerjaan_ibu,
      nama_instansi_kerja_ibu: nama_instansi_kerja_ibu,
      jabatan_ibu: jabatan_ibu,
      penghasilan_perbulan_ibu: penghasilan_perbulan_ibu,
      keberadaan_ibu: keberadaan_ibu,
      email: email,
      no_hp: no_hp,
    };

    const OrangTuaSiswa = await orangTuaSiswa.create(newOrangTuaSiswa);

    return res.status(201).send({
      status: "success",
      message: "data Orang Tua siswa berhasil ditambahkan",
      data: OrangTuaSiswa,
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.message,
    });
  }
});

const getOrangTuaSiswa = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const OrangTuaSiswa = await orangTuaSiswa.findOne({
      siswa_id: id,
    });

    if (!OrangTuaSiswa) {
      return res.status(401).send({
        status: "fail",
        message: "siswa tidak ditemukan",
      });
    }

    return res.status(200).send({
      status: success,
      data: OrangTuaSiswa,
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.message,
    });
  }
});

const updateOrangTuaSiswa = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;

    if (!req.body) {
      return res.status(400).send({
        status: "fail",
        message: "tidak ada kolom yang terisi",
      });
    }

    const OrangTuaSiswa = await orangTuaSiswa.findOneAndUpdate(
      { siswa_id: id },
      req.body
    );
    if (!OrangTuaSiswa) {
      return res.status(400).send({
        status: "success",
        message: "id tidak terdaftar",
      });
    }

    return res.status(201).send({
      status: "success",
      message: "data orang tua siswa berhasil diupdate",
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.message,
    });
  }
});

export { createOrangTuaSiswa, getOrangTuaSiswa, updateOrangTuaSiswa };
