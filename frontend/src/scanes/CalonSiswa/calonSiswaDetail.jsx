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
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  const { id } = useParams();
  const [detail, setDetail] = useState();
  const [formData, setFormData] = useState();

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
      // console.log(res);
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
                      >
                        Konfirmasi
                      </Button>
                      <Button
                        variant="contained"
                        style={{
                          background: colors.redAccent[400],
                          width: "100px",
                        }}
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
