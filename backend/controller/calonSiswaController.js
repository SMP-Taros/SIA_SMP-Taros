import CalonSiswa from "../models/calonSiswaModel.js";
import Siswa from "../models/siswaModel.js";
import KesehatanSiswa from "../models/kesehatanSiswaModel.js";
import PencapaianSiswa from "../models/pencapaianSiswaModel.js";
import OrangtuaSiswa from "../models/orangTuaSiswaModel.js";
import asyncHandler from "express-async-handler";
import { ObjectId } from "mongoose";

const createCalonSiswa = asyncHandler(async (req, res) => {
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
      membaca_alquran,
      jumlah_hafalan,
      hobby,
      cita_cita,
      prestasi,
      golongan_darah,
      penyakit_pernah_diderita,
      kelainan_jasmani,
      berat_badan,
      tinggi_badan,
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
      tipe_pembayaran,
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
      !alamat_asal_sekolah ||
      !nama_ayah ||
      !nik_ayah ||
      !tahun_lahir_ayah ||
      !penghasilan_perbulan_ayah ||
      !nama_ibu ||
      !nik_ibu ||
      !tahun_lahir_ibu ||
      !penghasilan_perbulan_ibu ||
      !tipe_pembayaran
    ) {
      // console.log(request.body.nama)
      return res.status(401).send({
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
      membaca_alquran: membaca_alquran,
      jumlah_hafalan: jumlah_hafalan,
      hobby: hobby,
      cita_cita: cita_cita,
      prestasi: prestasi,
      golongan_darah: golongan_darah,
      penyakit_pernah_diderita: penyakit_pernah_diderita,
      kelainan_jasmani: kelainan_jasmani,
      berat_badan: berat_badan,
      tinggi_badan: tinggi_badan,
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
      tipe_pembayaran: tipe_pembayaran,
    };

    const calonSiswa = await CalonSiswa.create(newSiswa);

    return res.status(201).json({
      status: "success",
      message: "siswa berhasil ditambahkan",
      data: calonSiswa,
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.message,
    });
  }
});
const confirmCalonSiswa = asyncHandler(async (req, res) => {
  try {
    const { id } = req.body;
    const calonSiswa = await CalonSiswa.findById(id);

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
      membaca_alquran,
      jumlah_hafalan,
      hobby,
      cita_cita,
      prestasi,
      golongan_darah,
      penyakit_pernah_diderita,
      kelainan_jasmani,
      berat_badan,
      tinggi_badan,
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
    } = calonSiswa;

    if (
      !id ||
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
      !alamat_asal_sekolah ||
      !nama_ayah ||
      !nik_ayah ||
      !tahun_lahir_ayah ||
      !penghasilan_perbulan_ayah ||
      !nama_ibu ||
      !nik_ibu ||
      !tahun_lahir_ibu ||
      !penghasilan_perbulan_ibu
    ) {
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

    const newPencapaianSiswa = {
      siswa_id: nisn,
      membaca_alquran: membaca_alquran,
      jumlah_hafalan: jumlah_hafalan,
      hobby: hobby,
      cita_cita: cita_cita,
      prestasi: prestasi,
    };
    const newKesehatanSiswa = {
      siswa_id: nisn,
      golongan_darah: golongan_darah,
      penyakit_pernah_diderita: penyakit_pernah_diderita,
      kelainan_jasmani: kelainan_jasmani,
      berat_badan: berat_badan,
      tinggi_badan: tinggi_badan,
    };

    const newOrangtuaSiswa = {
      siswa_id: nisn,
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

    const siswa = await Siswa.create(newSiswa);
    const kesehatanSiswa = await KesehatanSiswa.create(newKesehatanSiswa);
    const pencapaianSiswa = await PencapaianSiswa.create(newPencapaianSiswa);
    const orangtuaSiwa = await OrangtuaSiswa.create(newOrangtuaSiswa);

    const deleteCalonSiswa = await CalonSiswa.findByIdAndDelete(id);

    return res.status(201).send({
      status: "success",
      message: "konfirmasi siswa berhasil",
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({
      status: "error",
      message: error.message,
    });
  }
});

const getCalonSiswa = asyncHandler(async (req, res) => {
  try {
    const calonSiswa = await CalonSiswa.find({});

    const formattedData = calonSiswa.map((val) => {
      return {
        id: val._id,
        nama: val.nama,
        nisn: val.nisn,
        nik: val.nik,
        tanggal_lahir: val.tanggal_lahir,
      };
    });

    return res.status(200).json({
      status: "success",
      data: formattedData,
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.message,
    });
  }
});

const getDetailCalonSiswa = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const calonSiswa = await CalonSiswa.findById(id);

    if (!calonSiswa) {
      return res.status(401).send({
        status: "fail",
        message: "siswa tidak ditemukan",
      });
    }

    return res.status(200).send({
      status: "success",
      data: calonSiswa,
    });
  } catch (error) {
    console.log(error.massage);
    res.status(500).send({
      status: "error",
      message: error.message,
    });
  }
});

const deleteCalonSiswa = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const calonSiswa = await CalonSiswa.findByIdAndDelete(id);

    if (!calonSiswa) {
      return res.status(401).send({
        status: "fail",
        message: "Siswa not found",
      });
    }

    return res.status(201).send({
      status: success,
      message: "calon siswa berhasil dihapus",
    });
  } catch (error) {
    console.log(error.massage);
    res.status(500).send({
      status: "error",
      message: error.message,
    });
  }
});

export {
  createCalonSiswa,
  getCalonSiswa,
  getDetailCalonSiswa,
  deleteCalonSiswa,
  confirmCalonSiswa,
};
