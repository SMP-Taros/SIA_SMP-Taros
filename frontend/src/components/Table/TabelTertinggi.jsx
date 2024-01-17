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

const columns = [
  { id: "nomor", label: "No", minWidth: 10 },
  {
    id: "nama",
    label: "Nama",
    minWidth: 180,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "skor",
    label: "Skor",
    minWidth: 50,
    format: (value) => value.toLocaleString("en-US"),
  },
];

function createData(nomor, nama, skor) {
  return { nomor, nama, skor };
}

const rows = [
  createData("1", "Budi Santoso", 90),
  createData("1", "Budi Santoso", 90),
  createData("1", "Budi Santoso", 90),
];

const TabelTertinggi = ({ title }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box p="15px">
      <Typography
        m="10px"
        variant="h5"
        fontWeight="400"
        color={colors.grey[100]}
        textAlign="center"
      >
        {title}
      </Typography>
      <Box>
        <TableContainer sx={{ maxHeight: 440 }}>
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

export default TabelTertinggi;
