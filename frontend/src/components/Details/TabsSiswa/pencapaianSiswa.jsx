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
import { useGetPencapaianSiswaQuery } from "../../../slices/siswaApiSlice";

const PencapaianSiswa = (props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { data, isLoading } = useGetPencapaianSiswaQuery(props.id);
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
                    Membaca Alquran
                  </TableCell>
                  <TableCell>
                    {" "}
                    :{" "}
                    <input
                      placeholder={
                        !detail ? "Tidak ada data" : detail.membaca_alquran
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
                    Jumlah Hafalan
                  </TableCell>
                  <TableCell>
                    {" "}
                    :{" "}
                    <input
                      placeholder={
                        !detail ? "Tidak ada data" : detail.jumlah_hafalan
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
                  <TableCell style={{ fontSize: "16px" }}>Hobby</TableCell>
                  <TableCell>
                    {" "}
                    :{" "}
                    <input
                      placeholder={!detail ? "Tidak ada data" : detail.hobby}
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
                  <TableCell style={{ fontSize: "16px" }}>Prestasi</TableCell>
                  <TableCell>
                    {" "}
                    :{" "}
                    <input
                      placeholder={!detail ? "Tidak ada data" : detail.prestasi}
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

export default PencapaianSiswa;
