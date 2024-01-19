import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { tokens } from "../../Theme";
import { Typography, Box, CardContent, useTheme } from "@mui/material";

const TabelKehadiran = ({ title}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { id: "nomor", label: "No" },
    {
      id: "nama",
      label: "Nama",
      minWidth: 200,
      align: "center",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "divisi",
      label: "Divisi",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "skor",
      label: "Skor",
      format: (value) => value.toLocaleString("en-US"),
    },
  ];

  function createData(nomor, nama, divisi, skor) {
    return { nomor, nama, divisi, skor };
  }

  const rows = [
    createData("1", "Asep Saepuloh", "Teknisi", "9.0"),
    createData("2", "Siti", "Guru", "8.9"),
    createData("3", "Budi", "Guru", "12.09"),
  ];

  return (
    <Box>
      <Typography
        m="10px"
        variant="h5"
        fontWeight="800"
        color={colors.grey[100]}
        textAlign="center"
      >
        {title}
      </Typography>
      <Box display="flex" justifyContent="center" height="30vh">
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default TabelKehadiran;
