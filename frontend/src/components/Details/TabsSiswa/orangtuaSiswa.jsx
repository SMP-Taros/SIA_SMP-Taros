import {
  Box,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableContainer,
  Button,
} from "@mui/material";

import { useTheme } from "@emotion/react";
import { tokens } from "../../../Theme";

import EditIcon from "@mui/icons-material/Edit";

import { useState, useEffect } from "react";
import {
  useGetOrangtuaSiswaQuery,
  useUpdateOrangtuaSiswaMutation,
} from "../../../slices/siswaApiSlice";

const OrangtuaSiswa = (props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { data, isLoading } = useGetOrangtuaSiswaQuery(props.id);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [detail, setDetail] = useState();

  // eslint-disable-next-line react-hooks/rules-of-hooks
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

  const [update, { isUpdateLoading }] = useUpdateOrangtuaSiswaMutation();
  const [formData, setFormData] = useState();
  var token = props.id;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const updateHandler = (e) => {
    e.preventDefault();
    console.log("submit");

    // console.log(res);
    try {
      const res = update({
        id: token,
        data: formData,
      }).unwrap();
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Box component="div">
      <Grid item xs={12}>
        <form onSubmit={updateHandler}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table style={{ maxHeight: "693px" }}>
              <TableBody>
                <TableRow>
                  <TableCell style={{ fontSize: "16px" }}>Nama Ayah</TableCell>
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
                      onChange={handleInputChange}
                      name="nama_ayah"
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ fontSize: "16px" }}>NIK Ayah</TableCell>
                  <TableCell>
                    {" "}
                    :{" "}
                    <input
                      placeholder={!detail ? "Tidak ada data" : detail.nik_ayah}
                      style={{
                        border: "none",
                        fontSize: "16px",
                        marginLeft: "20px",
                      }}
                      type="text"
                      onChange={handleInputChange}
                      name="nik_ayah"
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
                        !detail ? "Tidak ada data" : detail.tahun_lahir_ayah
                      }
                      style={{
                        border: "none",
                        fontSize: "16px",
                        marginLeft: "20px",
                      }}
                      type="text"
                      onChange={handleInputChange}
                      name="tahun_lahir_ayah"
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
                      onChange={handleInputChange}
                      name="penididkan_terakhir_ayah"
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
                        !detail ? "Tidak ada data" : detail.pekerjaan_ayah
                      }
                      style={{
                        border: "none",
                        fontSize: "16px",
                        marginLeft: "20px",
                      }}
                      type="text"
                      onChange={handleInputChange}
                      name="pekerjaan_ayah"
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
                      name="nama_instansi_kerja_ayah"
                      onChange={handleInputChange}
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
                        !detail ? "Tidak ada data" : detail.jabatan_ayah
                      }
                      style={{
                        border: "none",
                        fontSize: "16px",
                        marginLeft: "20px",
                      }}
                      type="text"
                      onChange={handleInputChange}
                      name="jabatan_ayah"
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
                      onChange={handleInputChange}
                      name="penghasilan_perbulan_ayah"
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
                        !detail ? "Tidak ada data" : detail.keberadaan_ayah
                      }
                      style={{
                        border: "none",
                        fontSize: "16px",
                        marginLeft: "20px",
                      }}
                      type="text"
                      onChange={handleInputChange}
                      name="keberadaan_ayah"
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ fontSize: "16px" }}>Nama Ibu</TableCell>
                  <TableCell>
                    {" "}
                    :{" "}
                    <input
                      placeholder={!detail ? "Tidak ada data" : detail.nama_ibu}
                      style={{
                        border: "none",
                        fontSize: "16px",
                        marginLeft: "20px",
                      }}
                      type="text"
                      onChange={handleInputChange}
                      name="nama_ibu"
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ fontSize: "16px" }}>NIK Ibu</TableCell>
                  <TableCell>
                    {" "}
                    :{" "}
                    <input
                      placeholder={!detail ? "Tidak ada data" : detail.nik_ibu}
                      style={{
                        border: "none",
                        fontSize: "16px",
                        marginLeft: "20px",
                      }}
                      type="text"
                      onChange={handleInputChange}
                      name="nik_ibu"
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
                        !detail ? "Tidak ada data" : detail.tahun_lahir_ibu
                      }
                      style={{
                        border: "none",
                        fontSize: "16px",
                        marginLeft: "20px",
                      }}
                      type="text"
                      onChange={handleInputChange}
                      name="tahun_lahir_ibu"
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
                      onChange={handleInputChange}
                      name="pendidikan_terakhir_ibu"
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
                        !detail ? "Tidak ada data" : detail.pekerjaan_ibu
                      }
                      style={{
                        border: "none",
                        fontSize: "16px",
                        marginLeft: "20px",
                      }}
                      type="text"
                      onChange={handleInputChange}
                      name="pekerjaan_ibu"
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
                      name="nama_instansi_kerja_ibu"
                      type="text"
                      onChange={handleInputChange}
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
                        !detail ? "Tidak ada data" : detail.jabatan_ibu
                      }
                      style={{
                        border: "none",
                        fontSize: "16px",
                        marginLeft: "20px",
                      }}
                      type="text"
                      name="jabatan_ibu"
                      onChange={handleInputChange}
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
                      onChange={handleInputChange}
                      name="penghasilan_perbulan_ibu"
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
                        !detail ? "Tidak ada data" : detail.keberadaan_ibu
                      }
                      style={{
                        border: "none",
                        fontSize: "16px",
                        marginLeft: "20px",
                      }}
                      type="text"
                      onChange={handleInputChange}
                      name="keberadaan_ibu"
                    />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ fontSize: "16px" }}>Email</TableCell>
                  <TableCell>
                    {" "}
                    :{" "}
                    <input
                      placeholder={!detail ? "Tidak ada data" : detail.email}
                      style={{
                        border: "none",
                        fontSize: "16px",
                        marginLeft: "20px",
                      }}
                      type="text"
                      onChange={handleInputChange}
                      name="email"
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
                      placeholder={!detail ? "Tidak ada data" : detail.no_hp}
                      style={{
                        border: "none",
                        fontSize: "16px",
                        marginLeft: "20px",
                      }}
                      type="text"
                      onChange={handleInputChange}
                      name="no_hp"
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
              startIcon={<EditIcon />}
              style={{
                background: colors.greenAccent[800],
                width: "100px",
              }}
              type="submit"
              disabled={isUpdateLoading}
            >
              Edit
            </Button>
          </Box>
        </form>
      </Grid>
    </Box>
  );
};

export default OrangtuaSiswa;
