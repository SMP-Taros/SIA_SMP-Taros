import * as React from "react";
import { useTheme } from "@emotion/react";
import { styled } from "@mui/material/styles";
import { tokens } from "../../../Theme";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { Delete, Add, Edit } from "@mui/icons-material";
import { Box, IconButton, Grid, CardContent, Button } from "@mui/material";
import TablePagination from "@mui/material/TablePagination";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

const columns = [
  { id: "nomor", label: "No", minWidth: 50 },
  {
    id: "kode_mapel",
    label: "Kode Mata Pelajaran",
    minWidth: 80,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "nama_mapel",
    label: "Nama Mata Pelajaran",
    minWidth: 80,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "tahun_akademik",
    label: "Tahun Akademik",
    minWidth: 80,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "kelas",
    label: "Kelas",
    minWidth: 80,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "action",
    label: "Action",
    minWidth: 80,
    align: "center",
    format: (value) => value.toFixed(2),
  },
];

function createData(nomor, kode_mapel, nama_mapel, tahun_akademik, kelas, action) {
  return {
    nomor,
    kode_mapel,
    nama_mapel,
    tahun_akademik,
    kelas,
    action,
  };
}

const rows = [
  createData("1", "MTK001", "Matematika", "2023/2024", "7A", "action"),
];

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

export default function BasicTable() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <Box>
      <Grid container justifyContent="space-between">
        <Grid item>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Grid>
        <Grid item>
          <Box marginLeft="30px" marginTop="30px">
            <Button
              component={Link}
              to="/guru/edit"
              variant="contained"
              startIcon={<Add />}
              style={{ background: colors.greenAccent[500] }}
            >
              Tambah Data
            </Button>
          </Box>
        </Grid>
      </Grid>
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
                  {columns.map((column) => (
                    <StyledTableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </StyledTableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.code}
                      >
                        {columns.map((column) => {
                          const value = row[column.id];
                          console.log("Value:", value);

                          return (
                            <StyledTableCell
                              key={column.id}
                              align={column.align}
                            >
                              {value === "action" ? (
                                <Box>
                                  <IconButton
                                    style={{ color: colors.greenAccent[800] }}
                                  >
                                    <Edit />
                                  </IconButton>
                                  <IconButton
                                    style={{ color: colors.redAccent[500] }}
                                  >
                                    <Delete />
                                  </IconButton>
                                </Box>
                              ) : (
                                value
                              )}
                            </StyledTableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </CardContent>
    </Box>
  );
}
