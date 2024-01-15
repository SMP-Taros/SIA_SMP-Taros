import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  IconButton,
  useTheme,
  Stack,
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
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
// import Icon from "../../assets/icon/edit";
import EditIcon from "@mui/icons-material/Edit";
import { columns, rows } from "../../data/siswaData";

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

const Siswa = () => {
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

  const conditionalValueTable = (key, value) => {
    if (key === "action") {
      let val =
        "<List><ListItemButton><ListItemIcon style='width: 100px;'><img src=\"../../assets/icon/edit.png\" alt=\"Edit Icon\"></ListItemIcon><ListItemText primary='Inbox'/></ListItemButton></List>";
      return val;
    } else {
      return value;
    }
  };
  // const colorMode = useContext(ColorModeContext);
  return (
    <Template>
      <Box component="div" width="100%" padding="40px" paddingRight="70px">
        <Grid container justifyContent="space-between">
          <Grid item>
            <Header title="Data Master Siswa" />
          </Grid>
          <Grid item>
            <Typography variant="h2" fontSize="20px" marginTop="24px">
              Admin/Data master
              <EditIcon />
            </Typography>
          </Grid>
        </Grid>
        <Card>
          <CardContent>
            <Grid container justifyContent="space-between">
              <Grid item>
                <Typography variant="h3">Daftar Siswa SMP IT Taros</Typography>
              </Grid>
              <Grid item>
                <Stack direction="row">
                  <Box backgroundColor={colors.primary[400]} borderRadius="3px">
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
                    to="/siswa/create"
                    type="button"
                    sx={{ p: 1 }}
                  >
                    <AddIcon />
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
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
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

                              // var template = conditionalValueTable(
                              //   column.id,
                              //   value
                              // );
                              // var r = template.match(/\{[\w]+\}/g);

                              // if (r) {
                              //   r.forEach((state) => {
                              //     var regex = new RegExp(state, "g");
                              //     var stateItem = state.split(/{|}/g)[1];
                              //     template = template.replace(regex, stateItem);
                              //   });
                              // }

                              // Convert the string template to JSX using dangerouslySetInnerHTML

                              return (
                                <StyledTableCell
                                  key={column.id}
                                  align={column.align}
                                >
                                  {value === "action" ? (
                                    <IconButton
                                      component={Link}
                                      to="/siswa/create"
                                      type="button"
                                    >
                                      <EditIcon />
                                    </IconButton>
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

export default Siswa;
