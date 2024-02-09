import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  IconButton,
  useTheme,
  Stack,
  CircularProgress,
} from "@mui/material";

import { styled } from "@mui/material/styles";
import { DataGrid } from "@mui/x-data-grid";

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
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
// import Icon from "../../assets/icon/edit";
import EditIcon from "@mui/icons-material/Edit";
import { Delete, Info } from "@mui/icons-material";

import {
  useDeleteSiswaMutation,
  useGetAllSiswaQuery,
} from "../../slices/siswaApiSlice";

import { useEffect, useState } from "react";
import CustomBreadcrumbs from "../../components/CustomBreadcrumbs.jsx";

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
  const { data, isLoading, isError } = useGetAllSiswaQuery();
  //const { Delete, isDeleteLoading } = useDeleteSiswaMutation();
  // const [rows, setRows] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const navigate = useNavigate();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  function infoClickHandler(row) {
    navigate(`/siswa/${row.nisn}`);
  }

  let rows;
  //console.log(isLoading, isError);
  if (!isLoading && !isError) {
    rows = data.data.map((row, index) => ({ rowNumber: index + 1, ...row }));
  }
  //console.log(nameData);
  const [siswa, setSiswa] = useState("");
  const [searchVal, setSearchVal] = useState("");
  function handleSearchClick(e) {
    if (searchVal === "") {
      setSiswa(rows);
      return;
    }
    const filterBySearch = rows.filter((item) => {
      return item["nama"].toLowerCase().includes(searchVal.toLowerCase());
    });
    setSiswa(filterBySearch);
  }
  useEffect(() => {
    console.log(siswa);
  }, [siswa]);

  const columns = [
    { field: "rowNumber", headerName: "NO", width: 90 },
    {
      field: "_id",
      headerName: "ID",
      width: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "nama",
      headerName: "Nama",
      width: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "nisn",
      headerName: "Nisn",
      type: "number",
      width: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "jenis_kelamin",
      headerName: "Jenis kelamin",
      width: 150,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "alamat",
      headerName: "Alamat",
      width: 200,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "action",
      headerName: "Action",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 150,
      renderCell: (params) => {
        return (
          <IconButton
            type="button"
            style={{ color: colors.blueAccent[500] }}
            onClick={(e) => {
              infoClickHandler(params.row);
            }}
          >
            <Info />
          </IconButton>
        );
      },
    },
  ];

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       // console.log("isLoading:", isLoading);
  //       // console.log("data:", data);
  //
  //       if (!isLoading && data) {
  //         var fetchedRows = data.data;
  //         // console.log("fetchedRows:", fetchedRows);
  //         setRows(fetchedRows); // Update the state with the fetched rows
  //       } else {
  //         console.log("Data is undefined");
  //       }
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };
  //
  //   fetchData();
  // }, [isLoading, data]); // Adding 'isLoading' and 'data' to the dependency array

  // console.log("rows:", rows);

  // const colorMode = useContext(ColorModeContext);
  return (
    <Template>
      <Box
        component="div"
        width="100%"
        paddingLeft="40px"
        paddingTop="20px"
        paddingRight="70px"
      >
        <Grid container justifyContent="space-between">
          <Grid item>
            {/*<Header title="Data Master Siswa" />*/}
            <CustomBreadcrumbs></CustomBreadcrumbs>
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
                  <Box
                    backgroundColor={colors.primary[400]}
                    borderRadius="3px"
                    marginRight={2}
                  >
                    <InputBase
                      sx={{ ml: 2, flex: 1 }}
                      placeholder="Enter Keyword"
                      onChange={(e) => setSearchVal(e.target.value)}
                    />
                    <IconButton
                      onClick={handleSearchClick}
                      type="button"
                      sx={{ p: 1 }}
                    >
                      <SearchIcon />
                    </IconButton>
                  </Box>

                  <IconButton
                    component={Link}
                    to="/siswa/create"
                    type="button"
                    sx={{ p: 1 }}
                    style={{
                      background: colors.greenAccent[500],
                      borderRadius: 10,
                    }}
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
                {!isLoading ? (
                  <DataGrid
                    rows={!siswa ? rows : siswa}
                    columns={columns}
                    initialState={{
                      pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                      },
                    }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                    disableRowSelectionOnClick
                    getRowId={(row) => row._id}
                  />
                ) : (
                  <Box
                    sx={{ display: "flex", height: 200 }}
                    justifyContent="center"
                    alignItems="center"
                  >
                    <CircularProgress />
                  </Box>
                )}
              </TableContainer>
            </Paper>
          </CardContent>
        </Card>
      </Box>
    </Template>
  );
};

export default Siswa;
