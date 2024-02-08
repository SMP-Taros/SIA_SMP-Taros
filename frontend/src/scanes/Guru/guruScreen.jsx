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
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";

import SearchIcon from "@mui/icons-material/Search";
import Template from "../Template/TemplateScreen";
import { Add, Info } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header";

import {
  useGetAllGuruQuery,
  useDeleteGuruMutation,
} from "../../slices/guruApiSlice";

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

const Guru = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function infoClickHandler(row) {
    navigate(`/guru/${row.id}`);
  }


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const { data, isLoading, isError } = useGetAllGuruQuery();

  let rows;
  //console.log(isLoading, isError);
  if (!isLoading && !isError) {
    rows = data.data.map((row, index) => ({ rowNumber: index + 1, ...row }));
  }
  //console.log(nameData);
  const [guru, setGuru] = useState("");
  const [searchVal, setSearchVal] = useState("");
  function handleSearchClick(e) {
    if (searchVal === "") {
      setGuru(rows);
      return;
    }
    const filterBySearch = rows.filter((item) => {
      return item["nama"].toLowerCase().includes(searchVal.toLowerCase());
    });
    setGuru(filterBySearch);
  }
  useEffect(() => {
    console.log(guru);
  }, [guru]);

  const columns = [
    { field: "rowNumber", headerName: "NO", width: 90 },
    {
      field: "nama",
      headerName: "Nama",
      width: 200,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "nuptk",
      headerName: "NUPTK",
      type: "number",
      width: 200,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "nipy",
      headerName: "NIPY",
      width: 200,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "status_kepegawaian",
      headerName: "Status Kepegawaian",
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

  return (
    <Template>
      <Box component="div" width="100%" padding="40px" paddingRight="70px">
        <Grid container justifyContent="space-between">
          <Grid item>
            {/* <Header title="Data Master > Guru" /> */}
            <CustomBreadcrumbs></CustomBreadcrumbs>
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
                {!isLoading ? (
                  <DataGrid
                    rows={!guru ? rows : guru}
                    columns={columns}
                    initialState={{
                      pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                      },
                    }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                    disableRowSelectionOnClick
                    getRowId={(row) => row.id}
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

export default Guru;
