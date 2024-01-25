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
import { useGetKesehatanSiswaQuery } from "../../../slices/siswaApiSlice";

const KesehatanSiswa = (props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { data, isLoading } = useGetKesehatanSiswaQuery(props.id);
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
      <Grid item xs={12}>
        <form>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table style={{ maxHeight: "693px" }}>
              <TableBody>
                <TableRow>
                  <TableCell style={{ fontSize: "16px" }}>
                    Golongan Darah
                  </TableCell>
                  <TableCell>
                    {" "}
                    :{" "}
                    <input
                      placeholder={
                        !detail ? "Tidak ada data" : detail.golongan_darah
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
                        !detail ? "Tidak ada data" : detail.kelainan_jasmani
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
                        !detail ? "Tidak ada data" : detail.berat_badan
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
                        !detail ? "Tidak ada data" : detail.tinggi_badan
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
              startIcon={<EditIcon />}
              style={{
                background: colors.greenAccent[800],
                width: "100px",
              }}
            >
              Edit
            </Button>
          </Box>
        </form>
      </Grid>
    </Box>
  );
};

export default KesehatanSiswa;
