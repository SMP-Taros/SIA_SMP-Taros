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

import EditIcon from "@mui/icons-material/Edit";
import { tokens } from "../../../Theme";
import { useTheme } from "@emotion/react";

import { useState, useEffect } from "react";
import {
  useGetDetailGuruQuery,
  useUpdateDetailGuruMutation,
} from "../../../slices/guruApiSlice";
import { toast } from "react-toastify";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Informasi = (props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [nama, setNama] = useState();
  const [nuptk, setNuptk] = useState();

  const { data, isLoading } = useGetDetailGuruQuery(props.id);
  const [update, { isLoadingUpdate }] = useUpdateDetailGuruMutation();

  const [detail, setDetail] = useState();
  const [formData, setFormData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
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

  const updateHandler = (e) => {
    e.preventDefault();
    console.log("submit");

    try {
      const res = update({
        id: token,
        data: formData,
      }).unwrap();
      toast.res(res?.data?.message || "Edit Berhasil");
    } catch (err) {
    }
    window.location.reload();
  };

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Box display="flex" justifyContent="center" alignItems="center">
            <img
              alt="profile-user"
              width="300px"
              height="300px"
              src={`../../user.png`}
              style={{ cursor: "pointer", borderRadius: "50%" }}
            />
          </Box>
        </Grid>
        <Grid item xs={8}>
          <form onSubmit={updateHandler}>
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
                    <TableCell style={{ fontSize: "16px" }}>NUPTK</TableCell>
                    <TableCell>
                      {" "}
                      :{" "}
                      <input
                        placeholder={!detail ? "loading" : detail.nuptk}
                        style={{
                          border: "none",
                          fontSize: "16px",
                          marginLeft: "20px",
                        }}
                        name="nuptk"
                        type="text"
                        onChange={handleInputChange}
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
                        type="text"
                        onChange={handleInputChange}
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
                        name="tempat_lahir"
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
                        type="text"
                        onChange={handleInputChange}
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{ fontSize: "16px" }}>NIPY</TableCell>
                    <TableCell>
                      {" "}
                      :{" "}
                      <input
                        placeholder={!detail ? "loading" : detail.nipy}
                        style={{
                          border: "none",
                          fontSize: "16px",
                          marginLeft: "20px",
                        }}
                        name="nipy"
                        type="text"
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
                        type="text"
                        onChange={handleInputChange}
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{ fontSize: "16px" }}>No KK</TableCell>
                    <TableCell>
                      {" "}
                      :{" "}
                      <input
                        placeholder={!detail ? "loading" : detail.no_kk}
                        style={{
                          border: "none",
                          fontSize: "16px",
                          marginLeft: "20px",
                        }}
                        name="no_kk"
                        type="text"
                        onChange={handleInputChange}
                      />
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell style={{ fontSize: "16px" }}>
                      Status Kepegawaian
                    </TableCell>
                    <TableCell>
                      {" "}
                      :{" "}
                      <input
                        placeholder={
                          !detail ? "loading" : detail.status_kepegawaian
                        }
                        style={{
                          border: "none",
                          fontSize: "16px",
                          marginLeft: "20px",
                        }}
                        name="status_kepegawaian"
                        type="text"
                        onChange={handleInputChange}
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{ fontSize: "16px" }}>
                      Jenis PTK
                    </TableCell>
                    <TableCell>
                      {" "}
                      :{" "}
                      <input
                        placeholder={!detail ? "loading" : detail.jenis_ptk}
                        style={{
                          border: "none",
                          fontSize: "16px",
                          marginLeft: "20px",
                        }}
                        name="jenis_ptk"
                        type="text"
                        onChange={handleInputChange}
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
                    <TableCell style={{ fontSize: "16px" }}>No HP</TableCell>
                    <TableCell>
                      {" "}
                      :{" "}
                      <input
                        placeholder={!detail ? "loading" : detail.no_hp}
                        style={{
                          border: "none",
                          fontSize: "16px",
                          marginLeft: "20px",
                        }}
                        name="no_hp"
                        type="text"
                        onChange={handleInputChange}
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{ fontSize: "16px" }}>Email</TableCell>
                    <TableCell>
                      {" "}
                      :{" "}
                      <input
                        placeholder={!detail ? "loading" : detail.email}
                        style={{
                          border: "none",
                          fontSize: "16px",
                          marginLeft: "20px",
                        }}
                        name="email"
                        type="text"
                        onChange={handleInputChange}
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{ fontSize: "16px" }}>
                      SK Pengangkatan
                    </TableCell>
                    <TableCell>
                      {" "}
                      :{" "}
                      <input
                        placeholder={
                          !detail ? "loading" : detail.sk_pengangkatan
                        }
                        style={{
                          border: "none",
                          fontSize: "16px",
                          marginLeft: "20px",
                        }}
                        name="sk_pengangkatan"
                        type="text"
                        onChange={handleInputChange}
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{ fontSize: "16px" }}>
                      TMT Pengangkatan
                    </TableCell>
                    <TableCell>
                      {" "}
                      :{" "}
                      <input
                        placeholder={
                          !detail ? "loading" : detail.tmt_pengangkatan
                        }
                        style={{
                          border: "none",
                          fontSize: "16px",
                          marginLeft: "20px",
                        }}
                        name="tmt_pengangkatan"
                        type="text"
                        onChange={handleInputChange}
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{ fontSize: "16px" }}>
                      Status Perkawinan
                    </TableCell>
                    <TableCell>
                      {" "}
                      :{" "}
                      <input
                        placeholder={
                          !detail ? "loading" : detail.status_perkawinan
                        }
                        style={{
                          border: "none",
                          fontSize: "16px",
                          marginLeft: "20px",
                        }}
                        name="status_perkawinan"
                        type="text"
                        onChange={handleInputChange}
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{ fontSize: "16px" }}>
                      Nama Pasangan
                    </TableCell>
                    <TableCell>
                      {" "}
                      :{" "}
                      <input
                        placeholder={!detail ? "loading" : detail.nama_pasangan}
                        style={{
                          border: "none",
                          fontSize: "16px",
                          marginLeft: "20px",
                        }}
                        name="nama_pasangan"
                        type="text"
                        onChange={handleInputChange}
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{ fontSize: "16px" }}>
                      Pekerjaan Pasangan
                    </TableCell>
                    <TableCell>
                      {" "}
                      :{" "}
                      <input
                        placeholder={
                          !detail ? "loading" : detail.pekerjaan_pasangan
                        }
                        style={{
                          border: "none",
                          fontSize: "16px",
                          marginLeft: "20px",
                        }}
                        name="pekerjaan_pasangan"
                        type="text"
                        onChange={handleInputChange}
                      />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <Box display="flex" justifyContent="flex-end" marginTop="30px">
              <Button
                variant="contained"
                startIcon={<EditIcon />}
                style={{
                  background: colors.greenAccent[800],
                }}
                type="submit"
              >
                Edit Profil
              </Button>
            </Box>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Informasi;
