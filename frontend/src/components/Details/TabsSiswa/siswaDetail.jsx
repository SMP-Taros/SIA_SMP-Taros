import {
  Box,
  FormLabel,
  Grid,
  InputLabel,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TextField,
  Typography,
  TableContainer,
  Button,
} from "@mui/material";

import { useState, useEffect } from "react";
import { useGetDetailQuery } from "../../../slices/siswaApiSlice";

const DetailSiswa = (props) => {
  const { data, isLoading } = useGetDetailQuery(props.id);
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
          <form>
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
                        type="text"
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
                        type="text"
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
                      />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>

            <Button variant="contained" style={{ marginTop: "20px" }}>
              Edit
            </Button>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DetailSiswa;
