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
  useGetDetailSiswaQuery,
  useUpdateDetailSiswaMutation,
} from "../../../slices/siswaApiSlice";

const DetailSiswa = (props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [nama, setNama] = useState();
  const [nisn, setNisn] = useState();
  const { data, isLoading } = useGetDetailSiswaQuery(props.id);
  const [update, { isLoadingUpdate }] = useUpdateDetailSiswaMutation();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [detail, setDetail] = useState();
  const [formData, setFormData] = useState();

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

  var token = props.id;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const updateHadler = (e) => {
    e.preventDefault();
    console.log("submit");

    // console.log(res);
    try {
      const res = update({
        id: token,
        data: formData,
      }).unwrap();
      console.log(res);
    } catch (e) {}
  };

  return (
    <Box component="div">
      <Grid container>
        <Grid item xs={5}>
          <img
            alt="profile-user"
            width="400px"
            height="400px"
            src={`../user.png`}
            style={{ cursor: "pointer", borderRadius: "50%" }}
          />
        </Grid>
        <Grid item xs={7}>
          <form onSubmit={updateHadler}>
            <TableContainer sx={{ maxHeight: 440 }}>
              <Table style={{ maxHeight: "693px" }}>
                <TableBody>
                  <TableRow>
                    <TableCell style={{ fontSize: "16px" }}>Nama</TableCell>
                    <TableCell>
                      {" "}
                      :{" "}
                      <input
                        placeholder={!detail ? "loading" : detail.nama}
                        style={{
                          border: "none",
                          fontSize: "16px",
                          marginLeft: "20px",
                        }}
                        name="nama"
                        type="text"
                        onChange={handleInputChange}
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{ fontSize: "16px" }}>NIS</TableCell>
                    <TableCell>
                      {" "}
                      :{" "}
                      <input
                        placeholder={!detail ? "loading" : detail.nis}
                        style={{
                          border: "none",
                          fontSize: "16px",
                          marginLeft: "20px",
                        }}
                        name="nis"
                        onChange={handleInputChange}
                        type="text"
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{ fontSize: "16px" }}>NISN</TableCell>
                    <TableCell>
                      {" "}
                      :{" "}
                      <input
                        placeholder={!detail ? "loading" : detail.nisn}
                        style={{
                          border: "none",
                          fontSize: "16px",
                          marginLeft: "20px",
                        }}
                        type="text"
                        name="nisn"
                        onChange={handleInputChange}
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{ fontSize: "16px" }}>NIK</TableCell>
                    <TableCell>
                      {" "}
                      :{" "}
                      <input
                        placeholder={!detail ? "loading" : detail.nik}
                        style={{
                          border: "none",
                          fontSize: "16px",
                          marginLeft: "20px",
                        }}
                        name="nik"
                        onChange={handleInputChange}
                        type="text"
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
                        placeholder={!detail ? "loading" : detail.jenis_kelamin}
                        style={{
                          border: "none",
                          fontSize: "16px",
                          marginLeft: "20px",
                        }}
                        name="jenis_kelamin"
                        onChange={handleInputChange}
                        type="text"
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{ fontSize: "16px" }}>Alamat</TableCell>
                    <TableCell>
                      {" "}
                      :{" "}
                      <input
                        placeholder={!detail ? "loading" : detail.alamat}
                        style={{
                          border: "none",
                          fontSize: "16px",
                          marginLeft: "20px",
                        }}
                        name="alamat"
                        type="text"
                        onChange={handleInputChange}
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
                        placeholder={!detail ? "loading" : detail.tanggal_lahir}
                        style={{
                          border: "none",
                          fontSize: "16px",
                          marginLeft: "20px",
                        }}
                        name="tanggal_lahir"
                        onChange={handleInputChange}
                        type="text"
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
                        placeholder={!detail ? "loading" : detail.tempat_lahir}
                        style={{
                          border: "none",
                          fontSize: "16px",
                          marginLeft: "20px",
                        }}
                        type="text"
                        name="tempat_lahir"
                        onChange={handleInputChange}
                      />
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell style={{ fontSize: "16px" }}>Agama</TableCell>
                    <TableCell>
                      {" "}
                      :{" "}
                      <input
                        placeholder={!detail ? "loading" : detail.agama}
                        style={{
                          border: "none",
                          fontSize: "16px",
                          marginLeft: "20px",
                        }}
                        name="agama"
                        onChange={handleInputChange}
                        type="text"
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{ fontSize: "16px" }}>Status</TableCell>
                    <TableCell>
                      {" "}
                      :{" "}
                      <input
                        placeholder={!detail ? "loading" : detail.status}
                        style={{
                          border: "none",
                          fontSize: "16px",
                          marginLeft: "20px",
                        }}
                        name="status"
                        onChange={handleInputChange}
                        type="text"
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{ fontSize: "16px" }}>Anak ke</TableCell>
                    <TableCell>
                      {" "}
                      :{" "}
                      <input
                        placeholder={!detail ? "loading" : detail.anak_ke}
                        style={{
                          border: "none",
                          fontSize: "16px",
                          marginLeft: "20px",
                        }}
                        type="text"
                        name="anak_ke"
                        onChange={handleInputChange}
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
                        placeholder={
                          !detail ? "loading" : detail.jumlah_saudara_kandung
                        }
                        style={{
                          border: "none",
                          fontSize: "16px",
                          marginLeft: "20px",
                        }}
                        type="text"
                        name="jumlah_saudara_kandung"
                        onChange={handleInputChange}
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{ fontSize: "16px" }}>
                      Jarak Rumah ke Sekolah
                    </TableCell>
                    <TableCell>
                      {" "}
                      :{" "}
                      <input
                        placeholder={
                          !detail ? "loading" : detail.jarak_rumah_sekolah
                        }
                        style={{
                          border: "none",
                          fontSize: "16px",
                          marginLeft: "20px",
                        }}
                        type="text"
                        name="jarak_rumah_sekolah"
                        onChange={handleInputChange}
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{ fontSize: "16px" }}>
                      Asal sekolah
                    </TableCell>
                    <TableCell>
                      {" "}
                      :{" "}
                      <input
                        placeholder={!detail ? "loading" : detail.asal_sekolah}
                        style={{
                          border: "none",
                          fontSize: "16px",
                          marginLeft: "20px",
                        }}
                        type="text"
                        name="asal_sekolah"
                        onChange={handleInputChange}
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
                        placeholder={
                          !detail ? "loading" : detail.alamat_asal_sekolah
                        }
                        style={{
                          border: "none",
                          fontSize: "16px",
                          marginLeft: "20px",
                        }}
                        type="text"
                        name="alamat_asal_sekolah"
                        onChange={handleInputChange}
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
              >
                Edit
              </Button>
            </Box>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DetailSiswa;
