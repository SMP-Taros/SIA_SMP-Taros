import CalonSiswa from "../models/calonSiswaModel.js";
import Siswa from "../models/siswaModel.js";
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
      !penghasilan_perbulan_ibu
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
    };

    const calonSiswa = await CalonSiswa.create(newSiswa);

    return res.status(201).json({
      message: "siswa berhasil ditambahkan",
      data: calonSiswa,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
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
      count: calonSiswa.length,
      data: formattedData,
    });
  } catch (error) {
    console.log(error.massage);
    res.status(500).send({ message: error.message });
  }
});

const getDetailCalonSiswa = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const calonSiswa = await CalonSiswa.findById(id);

    if (!calonSiswa) {
      return res.status(401).send("siswa tidak ditemukan");
    }

    return res.status(200).json({
      data: calonSiswa,
    });
  } catch (error) {
    console.log(error.massage);
    res.status(500).send({ message: error.message });
  }
});

const deleteCalonSiswa = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const calonSiswa = await CalonSiswa.findByIdAndDelete(id);

    if (!calonSiswa) {
      return res.status(401).json({ message: "Siswa not found" });
    }

    return res.status(201).send("Siswa deleted");
  } catch (error) {
    console.log(error.massage);
    res.status(500).send({ message: error.message });
  }
});

export {
  createCalonSiswa,
  getCalonSiswa,
  getDetailCalonSiswa,
  deleteCalonSiswa,
};
