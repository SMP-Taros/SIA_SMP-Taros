import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  IconButton,
  useTheme,
  Stack,
  Tooltip,
} from "@mui/material";

import { styled } from "@mui/material/styles";

import InputBase from "@mui/material/InputBase";
// import { useContext } from "react";
import { ColorModeContext, tokens } from "../../Theme";
import * as React from "react";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

import SearchIcon from "@mui/icons-material/Search";
import Template from "../Template/TemplateScreen";
import { Add, Info, Delete } from "@mui/icons-material";
import { Link } from "react-router-dom";
import Header from "../../components/Header";

import { useGetAllGuruQuery } from "../../slices/guruApiSlice";

import { useEffect, useState } from "react";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    border: "none",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const Guru = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const { data, isLoading } = useGetAllGuruQuery();
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!isLoading && data) {
          var fetchedRows = data.data;
          setRows(fetchedRows);
        } else {
          console.log("Data is undefined");
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [isLoading, data]);
  // console.log("rows:", rows);
  return (
    <Template>
      <Box component="div" width="100%" padding="40px" paddingRight="70px">
        <Grid container justifyContent="space-between">
          <Grid item>
            <Header title="Data Master > Guru" />
          </Grid>
          <Grid item>
            <Typography variant="h2" fontSize="20px" marginTop="24px">
              Admin/Data master
            </Typography>
          </Grid>
        </Grid>
        <Card>
          <CardContent>
            <Grid container justifyContent="space-between">
              <Grid item>
                <Typography variant="h3">Daftar Guru SMP IT Taros</Typography>
              </Grid>
              <Grid item>
                <Stack direction="row">
                  <Box
                    backgroundColor={colors.primary[400]}
                    borderRadius="3px"
                    marginRight={2}
                  >
                    <InputBase
                      sx={{ ml: 2, flex: 1 }}
                      placeholder="Enter Keyword"
                    />
                    <IconButton type="button" sx={{ p: 1 }}>
                      <SearchIcon />
                    </IconButton>
                  </Box>

                  <IconButton
                    component={Link}
                    to="/guru/create"
                    type="button"
                    sx={{ p: 1 }}
                    style={{
                      background: colors.greenAccent[500],
                      borderRadius: 10,
                    }}
                  >
                    <Add />
                  </IconButton>
                </Stack>
              </Grid>
            </Grid>
          </CardContent>
          <CardContent sx={{ height: "100%" }}>
            <Paper
              sx={{
                width: "100%",
                overflow: "hidden",
                border: "none",
                boxShadow: "none",
              }}
            >
              <TableContainer
                sx={{ maxHeight: 440, width: "100%", border: "none" }}
              >
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell
                        key="nama"
                        align={"right"}
                        style={{ minWidth: 170 }}
                      >
                        Nama
                      </StyledTableCell>
                      <StyledTableCell
                        key="nuptk"
                        align={"right"}
                        style={{ minWidth: 80 }}
                      >
                        NUPTK
                      </StyledTableCell>
                      <StyledTableCell
                        key="jenis_kelamin"
                        align={"right"}
                        style={{ minWidth: 80 }}
                      >
                        Jenis Kelamin
                      </StyledTableCell>
                      <StyledTableCell
                        key="tempat_lahir"
                        align={"right"}
                        style={{ minWidth: 100 }}
                      >
                        Tempat Lahir
                      </StyledTableCell>
                      <StyledTableCell
                        key="tanggal_lahir"
                        align={"right"}
                        style={{ minWidth: 100 }}
                      >
                        Tanggal Lahir
                      </StyledTableCell>
                      <StyledTableCell
                        key="nipy"
                        align={"right"}
                        style={{ minWidth: 80 }}
                      >
                        NIPY
                      </StyledTableCell>
                      <StyledTableCell
                        key="action"
                        align={"right"}
                        style={{ minWidth: 80 }}
                      >
                        Aksi
                      </StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" align="right" scope="row">
                          {row.nama}
                        </TableCell>
                        <TableCell align="right">{row.nuptk}</TableCell>
                        <TableCell align="right">{row.jenis_kelamin}</TableCell>
                        <TableCell align="right">{row.tempat_lahir}</TableCell>
                        <TableCell align="right">{row.tanggal_lahir}</TableCell>
                        <TableCell align="right">{row.nipy}</TableCell>
                        <TableCell align="right">
                          <Tooltip title="Detail Guru">
                            <IconButton
                              component={Link}
                              to={`/guru/${row.id}`}
                              type="button"
                              style={{ color: colors.blueAccent[500] }}
                              // onClick={() => dispatch({ type: 'UPDATE_ROOM', payload: params.row })}
                            >
                              <Info />
                            </IconButton>
                          </Tooltip>
                          <Tooltip title="Delete">
                            <IconButton
                              style={{ color: colors.redAccent[500] }}
                              // onClick={() => deleteGuru(params.row, currentUser, dispatch)}
                            >
                              <Delete />
                            </IconButton>
                          </Tooltip>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Paper>
          </CardContent>
        </Card>
      </Box>
    </Template>
  );
};

export default Guru;
