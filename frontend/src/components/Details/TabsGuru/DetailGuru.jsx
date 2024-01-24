import React from "react";
import { Typography, Grid } from "@mui/material";

const DetailGuru = ({ data }) => {
  const {
    nama,
    NUPTK,
    jenis_kelamin,
    tempat_lahir,
    tanggal_lahir,
    NIPY,
    NIK,
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
  } = data;

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={4} marginLeft="40px">
          <Typography variant="body1">
            <strong>Nama</strong>
          </Typography>
          <Typography variant="body1">
            <strong>NUPTK</strong>
          </Typography>
          <Typography variant="body1">
            <strong>Jenis Kelamin</strong>
          </Typography>
          <Typography variant="body1">
            <strong>Tempat Lahir</strong>
          </Typography>
          <Typography variant="body1">
            <strong>Tanggal Lahir</strong>
          </Typography>
          <Typography variant="body1">
            <strong>NIPY</strong>
          </Typography>
          <Typography variant="body1">
            <strong>NIK</strong>
          </Typography>
          <Typography variant="body1">
            <strong>No KK</strong>
          </Typography>
          <Typography variant="body1">
            <strong>Status Kepegawaian</strong>
          </Typography>
          <Typography variant="body1">
            <strong>Jenis PTK</strong>
          </Typography>
          <Typography variant="body1">
            <strong>Alamat</strong>
          </Typography>
          <Typography variant="body1">
            <strong>No HP</strong>
          </Typography>
          <Typography variant="body1">
            <strong>Email</strong>
          </Typography>
          <Typography variant="body1">
            <strong>SK Pengangkatan</strong>
          </Typography>
          <Typography variant="body1">
            <strong>TMT Pengangkatan</strong>
          </Typography>
          <Typography variant="body1">
            <strong>Status Perkawinan</strong>
          </Typography>
          <Typography variant="body1">
            <strong>Nama Pasangangan</strong>
          </Typography>
          <Typography variant="body1">
            <strong>Pekerjaan Pasangan</strong>
          </Typography>
        </Grid>
        <Grid item xs={2} marginLeft="-40px">
          <Typography variant="body1">
            <strong>:</strong>
          </Typography>
          <Typography variant="body1">
            <strong>:</strong>
          </Typography>
          <Typography variant="body1">
            <strong>:</strong>
          </Typography>
          <Typography variant="body1">
            <strong>:</strong>
          </Typography>
          <Typography variant="body1">
            <strong>:</strong>
          </Typography>
          <Typography variant="body1">
            <strong>:</strong>
          </Typography>
          <Typography variant="body1">
            <strong>:</strong>
          </Typography>
          <Typography variant="body1">
            <strong>:</strong>
          </Typography>
          <Typography variant="body1">
            <strong>:</strong>
          </Typography>
          <Typography variant="body1">
            <strong>:</strong>
          </Typography>
          <Typography variant="body1">
            <strong>:</strong>
          </Typography>
          <Typography variant="body1">
            <strong>:</strong>
          </Typography>
          <Typography variant="body1">
            <strong>:</strong>
          </Typography>
          <Typography variant="body1">
            <strong>:</strong>
          </Typography>
          <Typography variant="body1">
            <strong>:</strong>
          </Typography>
          <Typography variant="body1">
            <strong>:</strong>
          </Typography>
          <Typography variant="body1">
            <strong>:</strong>
          </Typography>
          <Typography variant="body1">
            <strong>:</strong>
          </Typography>
        </Grid>
        <Grid item xs={6} marginLeft="-20px">
          <Typography variant="body1">{nama}</Typography>
          <Typography variant="body1">{NUPTK}</Typography>
          <Typography variant="body1">{jenis_kelamin}</Typography>
          <Typography variant="body1">{tempat_lahir}</Typography>
          <Typography variant="body1">{tanggal_lahir}</Typography>
          <Typography variant="body1">{NIPY}</Typography>
          <Typography variant="body1">{NIK}</Typography>
          <Typography variant="body1">{no_kk}</Typography>
          <Typography variant="body1">{status_kepegawaian}</Typography>
          <Typography variant="body1">{jenis_ptk}</Typography>
          <Typography variant="body1">{alamat}</Typography>
          <Typography variant="body1">{no_hp}</Typography>
          <Typography variant="body1">{email}</Typography>
          <Typography variant="body1">{sk_pengangkatan}</Typography>
          <Typography variant="body1">{tmt_pengangkatan}</Typography>
          <Typography variant="body1">{status_perkawinan}</Typography>
          <Typography variant="body1">{nama_pasangan}</Typography>
          <Typography variant="body1">{pekerjaan_pasangan}</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default DetailGuru;
