/* eslint-disable react/jsx-no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  useTheme,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Button,
} from "@mui/material";
import { tokens } from "../../Theme";
import { useEffect, useState } from "react";

import Template from "../Template/TemplateScreen";
import Header from "../../components/Header";
import { useParams } from "react-router-dom";
import {
  useGetDetailCalonSiswaQuery,
  useConfirmCalonSiswaMutation,
  useDeleteDetailCalonSiswaMutation,
} from "../../slices/calonSiswaApiSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

// import Kehadiran from "../../../components/Details/TabsGuru/Kehadiran";
// import MataPelajaran from "../../../components/Details/TabsGuru/MataPelajaran";

const calonSiswaDetail = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  // eslint-disable-next-line react-hooks/rules-of-hooks

  const navigate = useNavigate();

  const { id } = useParams();
  const [detail, setDetail] = useState();

  const { data, isLoading } = useGetDetailCalonSiswaQuery(id);
  const [confirm, { isLoadingConfirm }] = useConfirmCalonSiswaMutation();
  const [Delete, { isLoadingDelete }] = useDeleteDetailCalonSiswaMutation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // console.log("isLoading:", isLoading);
        // console.log("data:", data);

        if (!isLoading && data) {
          var fetchedRows = data.data;
          // console.log("fetchedRows:", fetchedRows);
          setDetail(fetchedRows);
          // Update the state with the fetched rows
        } else {
          console.log("Data is undefined");
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [isLoading, data]);

  const confirmHandler = (e) => {
    e.preventDefault();
    try {
      const res = confirm({ id: id, data: "data" }).unwrap();
      console.log(res);
      navigate("/calon_siswa");
      window.location.reload();
    } catch (err) {
      toast.error(err?.data?.message || "something wrong");
    }
  };
  const deleteHandler = (e) => {
    e.preventDefault();
    console.log("submit");
    try {
      const del = Delete({ id: id }).unwrap();
      navigate("/calon_siswa");
      window.location.reload();
    } catch (err) {}
  };

  return (
    <Template>
      <Box component="div" width="100%" padding="40px" paddingRight="70px">
        <Grid container justifyContent="space-between">
          <Grid item>
            <Header title="Data Master > Siswa > Detail" />
          </Grid>
          <Grid item>
            <Typography variant="h2" fontSize="20px" marginTop="24px">
              Admin/Data master
            </Typography>
          </Grid>
        </Grid>
        <Card>
          <CardContent>
            <Box component="div">
              <Grid container>
                <Grid item xs={12}>
                  <form onSubmit={confirmHandler}>
                    <TableContainer sx={{ maxHeight: 440 }}>
                      <Table style={{ maxHeight: "693px" }}>
                        <TableBody>
                          <TableRow>
                            <TableCell style={{ fontSize: "16px" }}>
                              Nama
                            </TableCell>
                            <TableCell>
                              {" "}
                              :{" "}
                              <input
                                value={!detail ? "Tidak ada data" : detail.nama}
                                style={{
                                  border: "none",
                                  fontSize: "16px",
                                  marginLeft: "20px",
                                }}
                                name="nama"
                                type="text"
                                readOnly
                              />
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell style={{ fontSize: "16px" }}>
                              Jenis Kelamin
                            </TableCell>
                            <TableCell>
                              {" "}
                              :{" "}
                              <input
                                value={
                                  !detail
                                    ? "Tidak ada data"
                                    : detail.jenis_kelamin
                                }
                                style={{
                                  border: "none",
                                  fontSize: "16px",
                                  marginLeft: "20px",
                                }}
                                name="nama"
                                type="text"
                                readOnly
                              />
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell style={{ fontSize: "16px" }}>
                              NISN
                            </TableCell>
                            <TableCell>
                              {" "}
                              :{" "}
                              <input
                                value={!detail ? "Tidak ada data" : detail.nisn}
                                style={{
                                  border: "none",
                                  fontSize: "16px",
                                  marginLeft: "20px",
                                }}
                                name="nama"
                                type="text"
                                readOnly
                              />
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell style={{ fontSize: "16px" }}>
                              Tempat Lahir
                            </TableCell>
                            <TableCell>
                              {" "}
                              :{" "}
                              <input
                                value={
                                  !detail
                                    ? "Tidak ada data"
                                    : detail.tempat_lahir
                                }
                                style={{
                                  border: "none",
                                  fontSize: "16px",
                                  marginLeft: "20px",
                                }}
                                name="nama"
                                type="text"
                                readOnly
                              />
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell style={{ fontSize: "16px" }}>
                              Tanggal Lahir
                            </TableCell>
                            <TableCell>
                              {" "}
                              :{" "}
                              <input
                                value={
                                  !detail
                                    ? "Tidak ada data"
                                    : detail.tanggal_lahir
                                }
                                style={{
                                  border: "none",
                                  fontSize: "16px",
                                  marginLeft: "20px",
                                }}
                                name="nama"
                                type="text"
                                readOnly
                              />
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell style={{ fontSize: "16px" }}>
                              NIK
                            </TableCell>
                            <TableCell>
                              {" "}
                              :{" "}
                              <input
                                value={!detail ? "Tidak ada data" : detail.nik}
                                style={{
                                  border: "none",
                                  fontSize: "16px",
                                  marginLeft: "20px",
                                }}
                                name="nama"
                                type="text"
                                readOnly
                              />
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell style={{ fontSize: "16px" }}>
                              Agama
                            </TableCell>
                            <TableCell>
                              {" "}
                              :{" "}
                              <input
                                value={
                                  !detail ? "Tidak ada data" : detail.agama
                                }
                                style={{
                                  border: "none",
                                  fontSize: "16px",
                                  marginLeft: "20px",
                                }}
                                name="nama"
                                type="text"
                                readOnly
                              />
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell style={{ fontSize: "16px" }}>
                              Status
                            </TableCell>
                            <TableCell>
                              {" "}
                              :{" "}
                              <input
                                value={
                                  !detail ? "Tidak ada data" : detail.status
                                }
                                style={{
                                  border: "none",
                                  fontSize: "16px",
                                  marginLeft: "20px",
                                }}
                                name="nama"
                                type="text"
                                readOnly
                              />
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell style={{ fontSize: "16px" }}>
                              Anak Ke
                            </TableCell>
                            <TableCell>
                              {" "}
                              :{" "}
                              <input
                                value={
                                  !detail ? "Tidak ada data" : detail.anak_ke
                                }
                                style={{
                                  border: "none",
                                  fontSize: "16px",
                                  marginLeft: "20px",
                                }}
                                name="nama"
                                type="text"
                                readOnly
                              />
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell style={{ fontSize: "16px" }}>
                              Jumlah Saudara Kandung
                            </TableCell>
                            <TableCell>
                              {" "}
                              :{" "}
                              <input
                                value={
                                  !detail
                                    ? "Tidak ada data"
                                    : detail.jumlah_saudara_kandung
                                }
                                style={{
                                  border: "none",
                                  fontSize: "16px",
                                  marginLeft: "20px",
                                }}
                                name="nama"
                                type="text"
                                readOnly
                              />
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell style={{ fontSize: "16px" }}>
                              Status Anak
                            </TableCell>
                            <TableCell>
                              {" "}
                              :{" "}
                              <input
                                value={
                                  !detail
                                    ? "Tidak ada data"
                                    : detail.status_anak
                                }
                                style={{
                                  border: "none",
                                  fontSize: "16px",
                                  marginLeft: "20px",
                                }}
                                name="nama"
                                type="text"
                                readOnly
                              />
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell style={{ fontSize: "16px" }}>
                              Alamat
                            </TableCell>
                            <TableCell>
                              {" "}
                              :{" "}
                              <input
                                value={
                                  !detail ? "Tidak ada data" : detail.alamat
                                }
                                style={{
                                  border: "none",
                                  fontSize: "16px",
                                  marginLeft: "20px",
                                }}
                                name="nama"
                                type="text"
                                readOnly
                              />
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell style={{ fontSize: "16px" }}>
                              Jarak Rumah sekolah
                            </TableCell>
                            <TableCell>
                              {" "}
                              :{" "}
                              <input
                                value={
                                  !detail
                                    ? "Tidak ada data"
                                    : detail.jarak_rumah_sekolah
                                }
                                style={{
                                  border: "none",
                                  fontSize: "16px",
                                  marginLeft: "20px",
                                }}
                                name="nama"
                                type="text"
                                readOnly
                              />
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell style={{ fontSize: "16px" }}>
                              Asal Sekolah
                            </TableCell>
                            <TableCell>
                              {" "}
                              :{" "}
                              <input
                                value={
                                  !detail
                                    ? "Tidak ada data"
                                    : detail.asal_sekolah
                                }
                                style={{
                                  border: "none",
                                  fontSize: "16px",
                                  marginLeft: "20px",
                                }}
                                name="nama"
                                type="text"
                                readOnly
                              />
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell style={{ fontSize: "16px" }}>
                              Alamat Asal Sekolah
                            </TableCell>
                            <TableCell>
                              {" "}
                              :{" "}
                              <input
                                value={
                                  !detail
                                    ? "Tidak ada data"
                                    : detail.alamat_asal_sekolah
                                }
                                style={{
                                  border: "none",
                                  fontSize: "16px",
                                  marginLeft: "20px",
                                }}
                                name="nama"
                                type="text"
                                readOnly
                              />
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell style={{ fontSize: "16px" }}>
                              Membaca alquran
                            </TableCell>
                            <TableCell>
                              {" "}
                              :{" "}
                              <input
                                value={
                                  !detail
                                    ? "Tidak ada data"
                                    : detail.membaca_alquran
                                }
                                style={{
                                  border: "none",
                                  fontSize: "16px",
                                  marginLeft: "20px",
                                }}
                                name="nama"
                                type="text"
                                readOnly
                              />
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell style={{ fontSize: "16px" }}>
                              Jumlah Hafalan
                            </TableCell>
                            <TableCell>
                              {" "}
                              :{" "}
                              <input
                                value={
                                  !detail
                                    ? "Tidak ada data"
                                    : detail.jumlah_hafalan
                                }
                                style={{
                                  border: "none",
                                  fontSize: "16px",
                                  marginLeft: "20px",
                                }}
                                name="nama"
                                type="text"
                                readOnly
                              />
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell style={{ fontSize: "16px" }}>
                              Hobby
                            </TableCell>
                            <TableCell>
                              {" "}
                              :{" "}
                              <input
                                value={
                                  !detail ? "Tidak ada data" : detail.hobby
                                }
                                style={{
                                  border: "none",
                                  fontSize: "16px",
                                  marginLeft: "20px",
                                }}
                                name="nama"
                                type="text"
                                readOnly
                              />
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell style={{ fontSize: "16px" }}>
                              Cita - Cita
                            </TableCell>
                            <TableCell>
                              {" "}
                              :{" "}
                              <input
                                placeholder={
                                  !detail ? "Tidak ada data" : detail.cita_cita
                                }
                                style={{
                                  border: "none",
                                  fontSize: "16px",
                                  marginLeft: "20px",
                                }}
                                type="text"
                              />
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell style={{ fontSize: "16px" }}>
                              Prestasi
                            </TableCell>
                            <TableCell>
                              {" "}
                              :{" "}
                              <input
                                placeholder={
                                  !detail ? "Tidak ada data" : detail.prestasi
                                }
                                style={{
                                  border: "none",
                                  fontSize: "16px",
                                  marginLeft: "20px",
                                }}
                                type="text"
                              />
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell style={{ fontSize: "16px" }}>
                              Golongan Darah
                            </TableCell>
                            <TableCell>
                              {" "}
                              :{" "}
                              <input
                                placeholder={
                                  !detail
                                    ? "Tidak ada data"
                                    : detail.golongan_darah
                                }
                                style={{
                                  border: "none",
                                  fontSize: "16px",
                                  marginLeft: "20px",
                                }}
                                type="text"
                              />
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell style={{ fontSize: "16px" }}>
                              Penyakit yang pernah diderita
                            </TableCell>
                            <TableCell>
                              {" "}
                              :{" "}
                              <input
                                placeholder={
                                  !detail
                                    ? "Tidak ada data"
                                    : detail.penyakit_pernah_diderita
                                }
                                style={{
                                  border: "none",
                                  fontSize: "16px",
                                  marginLeft: "20px",
                                }}
                                type="text"
                              />
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell style={{ fontSize: "16px" }}>
                              Kelainan Jasmani
                            </TableCell>
                            <TableCell>
                              {" "}
                              :{" "}
                              <input
                                placeholder={
                                  !detail
                                    ? "Tidak ada data"
                                    : detail.kelainan_jasmani
                                }
                                style={{
                                  border: "none",
                                  fontSize: "16px",
                                  marginLeft: "20px",
                                }}
                                type="text"
                              />
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell style={{ fontSize: "16px" }}>
                              Berat Badan
                            </TableCell>
                            <TableCell>
                              {" "}
                              :{" "}
                              <input
                                placeholder={
                                  !detail
                                    ? "Tidak ada data"
                                    : detail.berat_badan
                                }
                                style={{
                                  border: "none",
                                  fontSize: "16px",
                                  marginLeft: "20px",
                                }}
                                type="text"
                              />
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell style={{ fontSize: "16px" }}>
                              Tinggi Badan
                            </TableCell>
                            <TableCell>
                              {" "}
                              :{" "}
                              <input
                                placeholder={
                                  !detail
                                    ? "Tidak ada data"
                                    : detail.tinggi_badan
                                }
                                style={{
                                  border: "none",
                                  fontSize: "16px",
                                  marginLeft: "20px",
                                }}
                                type="text"
                              />
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell style={{ fontSize: "16px" }}>
                              Nama Ayah
                            </TableCell>
                            <TableCell>
                              {" "}
                              :{" "}
                              <input
                                placeholder={
                                  !detail ? "Tidak ada data" : detail.nama_ayah
                                }
                                style={{
                                  border: "none",
                                  fontSize: "16px",
                                  marginLeft: "20px",
                                }}
                                type="text"
                              />
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell style={{ fontSize: "16px" }}>
                              NIK Ayah
                            </TableCell>
                            <TableCell>
                              {" "}
                              :{" "}
                              <input
                                placeholder={
                                  !detail ? "Tidak ada data" : detail.nik_ayah
                                }
                                style={{
                                  border: "none",
                                  fontSize: "16px",
                                  marginLeft: "20px",
                                }}
                                type="text"
                              />
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell style={{ fontSize: "16px" }}>
                              Tahun Lahir Ayah
                            </TableCell>
                            <TableCell>
                              {" "}
                              :{" "}
                              <input
                                placeholder={
                                  !detail
                                    ? "Tidak ada data"
                                    : detail.tahun_lahir_ayah
                                }
                                style={{
                                  border: "none",
                                  fontSize: "16px",
                                  marginLeft: "20px",
                                }}
                                type="text"
                              />
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell style={{ fontSize: "16px" }}>
                              Pendidikan Terakhir Ayah
                            </TableCell>
                            <TableCell>
                              {" "}
                              :{" "}
                              <input
                                placeholder={
                                  !detail
                                    ? "Tidak ada data"
                                    : detail.pendidikan_terakhir_ayah
                                }
                                style={{
                                  border: "none",
                                  fontSize: "16px",
                                  marginLeft: "20px",
                                }}
                                type="text"
                              />
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell style={{ fontSize: "16px" }}>
                              Pekerjaan Ayah
                            </TableCell>
                            <TableCell>
                              {" "}
                              :{" "}
                              <input
                                placeholder={
                                  !detail
                                    ? "Tidak ada data"
                                    : detail.pekerjaan_ayah
                                }
                                style={{
                                  border: "none",
                                  fontSize: "16px",
                                  marginLeft: "20px",
                                }}
                                type="text"
                              />
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell style={{ fontSize: "16px" }}>
                              Nama Instansi Kerja Ayah
                            </TableCell>
                            <TableCell>
                              {" "}
                              :{" "}
                              <input
                                placeholder={
                                  !detail
                                    ? "Tidak ada data"
                                    : detail.nama_instansi_kerja_ayah
                                }
                                style={{
                                  border: "none",
                                  fontSize: "16px",
                                  marginLeft: "20px",
                                }}
                                type="text"
                              />
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell style={{ fontSize: "16px" }}>
                              Jabatan Ayah
                            </TableCell>
                            <TableCell>
                              {" "}
                              :{" "}
                              <input
                                placeholder={
                                  !detail
                                    ? "Tidak ada data"
                                    : detail.jabatan_ayah
                                }
                                style={{
                                  border: "none",
                                  fontSize: "16px",
                                  marginLeft: "20px",
                                }}
                                type="text"
                              />
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell style={{ fontSize: "16px" }}>
                              Penghasilan Perbulan Ayah
                            </TableCell>
                            <TableCell>
                              {" "}
                              :{" "}
                              <input
                                placeholder={
                                  !detail
                                    ? "Tidak ada data"
                                    : detail.penghasilan_perbulan_ayah
                                }
                                style={{
                                  border: "none",
                                  fontSize: "16px",
                                  marginLeft: "20px",
                                }}
                                type="text"
                              />
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell style={{ fontSize: "16px" }}>
                              Keberdaan Ayah
                            </TableCell>
                            <TableCell>
                              {" "}
                              :{" "}
                              <input
                                placeholder={
                                  !detail
                                    ? "Tidak ada data"
                                    : detail.keberadaan_ayah
                                }
                                style={{
                                  border: "none",
                                  fontSize: "16px",
                                  marginLeft: "20px",
                                }}
                                type="text"
                              />
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell style={{ fontSize: "16px" }}>
                              Nama Ibu
                            </TableCell>
                            <TableCell>
                              {" "}
                              :{" "}
                              <input
                                placeholder={
                                  !detail ? "Tidak ada data" : detail.nama_ibu
                                }
                                style={{
                                  border: "none",
                                  fontSize: "16px",
                                  marginLeft: "20px",
                                }}
                                type="text"
                              />
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell style={{ fontSize: "16px" }}>
                              NIK Ibu
                            </TableCell>
                            <TableCell>
                              {" "}
                              :{" "}
                              <input
                                placeholder={
                                  !detail ? "Tidak ada data" : detail.nik_ibu
                                }
                                style={{
                                  border: "none",
                                  fontSize: "16px",
                                  marginLeft: "20px",
                                }}
                                type="text"
                              />
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell style={{ fontSize: "16px" }}>
                              Tahun Lahir Ibu
                            </TableCell>
                            <TableCell>
                              {" "}
                              :{" "}
                              <input
                                placeholder={
                                  !detail
                                    ? "Tidak ada data"
                                    : detail.tahun_lahir_ibu
                                }
                                style={{
                                  border: "none",
                                  fontSize: "16px",
                                  marginLeft: "20px",
                                }}
                                type="text"
                              />
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell style={{ fontSize: "16px" }}>
                              Pendidikan Terakhir Ibu
                            </TableCell>
                            <TableCell>
                              {" "}
                              :{" "}
                              <input
                                placeholder={
                                  !detail
                                    ? "Tidak ada data"
                                    : detail.pendidikan_terakhir_ibu
                                }
                                style={{
                                  border: "none",
                                  fontSize: "16px",
                                  marginLeft: "20px",
                                }}
                                type="text"
                              />
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell style={{ fontSize: "16px" }}>
                              Pekerjaan Ibu
                            </TableCell>
                            <TableCell>
                              {" "}
                              :{" "}
                              <input
                                placeholder={
                                  !detail
                                    ? "Tidak ada data"
                                    : detail.pekerjaan_ibu
                                }
                                style={{
                                  border: "none",
                                  fontSize: "16px",
                                  marginLeft: "20px",
                                }}
                                type="text"
                              />
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell style={{ fontSize: "16px" }}>
                              Nama Instansi Kerja Ibu
                            </TableCell>
                            <TableCell>
                              {" "}
                              :{" "}
                              <input
                                placeholder={
                                  !detail
                                    ? "Tidak ada data"
                                    : detail.nama_instansi_kerja_ibu
                                }
                                style={{
                                  border: "none",
                                  fontSize: "16px",
                                  marginLeft: "20px",
                                }}
                                type="text"
                              />
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell style={{ fontSize: "16px" }}>
                              Jabatan Ibu
                            </TableCell>
                            <TableCell>
                              {" "}
                              :{" "}
                              <input
                                placeholder={
                                  !detail
                                    ? "Tidak ada data"
                                    : detail.jabatan_ibu
                                }
                                style={{
                                  border: "none",
                                  fontSize: "16px",
                                  marginLeft: "20px",
                                }}
                                type="text"
                              />
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell style={{ fontSize: "16px" }}>
                              Penghasilan Perbulan Ibu
                            </TableCell>
                            <TableCell>
                              {" "}
                              :{" "}
                              <input
                                placeholder={
                                  !detail
                                    ? "Tidak ada data"
                                    : detail.penghasilan_perbulan_ibu
                                }
                                style={{
                                  border: "none",
                                  fontSize: "16px",
                                  marginLeft: "20px",
                                }}
                                type="text"
                              />
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell style={{ fontSize: "16px" }}>
                              Keberdaan Ibu
                            </TableCell>
                            <TableCell>
                              {" "}
                              :{" "}
                              <input
                                placeholder={
                                  !detail
                                    ? "Tidak ada data"
                                    : detail.keberadaan_ibu
                                }
                                style={{
                                  border: "none",
                                  fontSize: "16px",
                                  marginLeft: "20px",
                                }}
                                type="text"
                              />
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell style={{ fontSize: "16px" }}>
                              Email
                            </TableCell>
                            <TableCell>
                              {" "}
                              :{" "}
                              <input
                                placeholder={
                                  !detail ? "Tidak ada data" : detail.email
                                }
                                style={{
                                  border: "none",
                                  fontSize: "16px",
                                  marginLeft: "20px",
                                }}
                                type="text"
                              />
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell style={{ fontSize: "16px" }}>
                              No Handphone
                            </TableCell>
                            <TableCell>
                              {" "}
                              :{" "}
                              <input
                                placeholder={
                                  !detail ? "Tidak ada data" : detail.no_hp
                                }
                                style={{
                                  border: "none",
                                  fontSize: "16px",
                                  marginLeft: "20px",
                                }}
                                type="text"
                              />
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell style={{ fontSize: "16px" }}>
                              Tipe Pembayaran
                            </TableCell>
                            <TableCell>
                              {" "}
                              :{" "}
                              <input
                                placeholder={
                                  !detail
                                    ? "Tidak ada data"
                                    : detail.tipe_pembayaran
                                }
                                style={{
                                  border: "none",
                                  fontSize: "16px",
                                  marginLeft: "20px",
                                }}
                                type="text"
                              />
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell style={{ fontSize: "16px" }}>
                              Bukti Pembayaran
                            </TableCell>
                            <TableCell>
                              {" "}
                              :{" "}
                              <input
                                placeholder={
                                  !detail
                                    ? "Tidak ada data"
                                    : detail.bukti_pembayaran
                                }
                                style={{
                                  border: "none",
                                  fontSize: "16px",
                                  marginLeft: "20px",
                                }}
                                type="text"
                              />
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </TableContainer>
                    <Box
                      display="flex"
                      justifyContent="flex-end"
                      marginTop="30px"
                      paddingLeft="40px"
                    >
                      <Button
                        variant="contained"
                        style={{
                          background: colors.greenAccent[400],
                          width: "100px",
                          marginRight: "20px",
                        }}
                        type="submit"
                        disabled={isLoadingConfirm}
                      >
                        Konfirmasi
                      </Button>
                      <Button
                        variant="contained"
                        style={{
                          background: colors.redAccent[400],
                          width: "100px",
                        }}
                        disabled={isLoadingDelete}
                        onClick={deleteHandler}
                      >
                        Delete
                      </Button>
                    </Box>
                  </form>
                </Grid>
              </Grid>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Template>
  );
};

export default calonSiswaDetail;
