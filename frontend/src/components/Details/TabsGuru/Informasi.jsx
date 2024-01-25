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
  Modal,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import { tokens } from "../../../Theme";
import { useTheme } from "@emotion/react";

import { useState, useEffect } from "react";
import { useGetDetailGuruQuery } from "../../../slices/guruApiSlice";

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
  const { data, isLoading } = useGetDetailGuruQuery(props.id);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [detail, setDetail] = useState();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
    <div>
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
                          placeholder={
                            !detail ? "loading" : detail.jenis_kelamin
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
                        Tempat Lahir
                      </TableCell>
                      <TableCell>
                        {" "}
                        :{" "}
                        <input
                          placeholder={
                            !detail ? "loading" : detail.tempat_lahir
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
                        Tanggal Lahir
                      </TableCell>
                      <TableCell>
                        {" "}
                        :{" "}
                        <input
                          placeholder={
                            !detail ? "loading" : detail.tanggal_lahir
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
                          type="text"
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
                          type="text"
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
                          type="text"
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
                          type="text"
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
                          type="text"
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
                          type="text"
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
                          type="text"
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
                          placeholder={
                            !detail ? "loading" : detail.nama_pasangan
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
                          type="text"
                        />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </form>
          </Grid>
        </Grid>
      </Box>
      <Box display="flex" justifyContent="flex-end" marginTop="30px">
        <Button
          onClick={handleOpen}
          variant="contained"
          startIcon={<EditIcon />}
          style={{ background: colors.greenAccent[800] }}
        >
          Edit Profil
        </Button>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </Box>
      </Modal>
    </div>
  );
};

export default Informasi;