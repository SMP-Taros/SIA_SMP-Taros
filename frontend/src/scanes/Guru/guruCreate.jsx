import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  useTheme,
  Divider,
  TextField,
  MenuItem,
  Button,
} from "@mui/material";
import { tokens } from "../../Theme";
import * as React from "react";
import { styled } from "@mui/material/styles";

import Template from "../Template/TemplateScreen";
import Header from "../../components/Header";
import FileUpload from "../../components/FileUpload/FIleUpload";

const akses = [
  {
    value: "admin",
    label: "Admin",
  },
  {
    value: "guru",
    label: "Guru",
  },
];

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const GuruCreate = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Template>
      <Box component="div" width="100%" padding="40px" paddingRight="70px">
        <Grid container justifyContent="space-between">
          <Grid item>
            <Header title="Data Master > Guru > Tambah" />
          </Grid>
          <Grid item>
            <Typography variant="h3" fontSize="20px" marginTop="24px">
              Admin/Data master
            </Typography>
          </Grid>
        </Grid>
        <Card>
          <CardContent>
            <Typography
              variant="h4"
              fontWeight="bold"
              fontSize="20px"
              margin="12px"
            >
              Tambah Data Guru
            </Typography>
            <Divider orientation="horizontal" />
            <Box>
              <Grid container spacing={4} paddingLeft={10} paddingRight={10}>
                <Grid item xs={6} marginLeft={6}>
                  <Typography paddingTop={3}>
                    <strong>NIP</strong>
                  </Typography>
                  <Typography paddingTop={3} marginTop={2}>
                    <strong>Nama Guru</strong>
                  </Typography>
                  <Typography paddingTop={3} marginTop={2}>
                    <strong>Status</strong>
                  </Typography>
                  <Typography paddingTop={3} marginTop={2}>
                    <strong>Pendidikan Terakhir</strong>
                  </Typography>
                  <Typography paddingTop={3} marginTop={2}>
                    <strong>Mata Pelajaran</strong>
                  </Typography>
                  <Typography paddingTop={3} marginTop={2}>
                    <strong>Email</strong>
                  </Typography>
                  <Typography paddingTop={3} marginTop={2}>
                    <strong>Username</strong>
                  </Typography>
                  <Typography paddingTop={3} marginTop={2}>
                    <strong>Password</strong>
                  </Typography>
                  <Typography paddingTop={3} marginTop={2}>
                    <strong>Foto (Image Upload)</strong>
                  </Typography>
                </Grid>
                <Grid item xs={6} marginLeft={-30}>
                  <TextField
                    required
                    id="outlined-basic"
                    label="NIP"
                    variant="outlined"
                    size="small"
                    margin="normal"
                    fullWidth
                  />
                  <TextField
                    required
                    id="outlined-basic"
                    label="Nama Guru"
                    variant="outlined"
                    size="small"
                    margin="normal"
                    fullWidth
                    // style={{ background: colors.grey[900] }}
                  />
                  <TextField
                    required
                    id="outlined-select-currency"
                    select
                    label="- Pilih -"
                    size="small"
                    margin="normal"
                    fullWidth
                  >
                    {akses.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                  <TextField
                    required
                    id="outlined-select-currency"
                    select
                    label="- Pilih -"
                    size="small"
                    margin="normal"
                    fullWidth
                  >
                    {akses.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                  <TextField
                    required
                    id="outlined-select-currency"
                    select
                    label="- Pilih -"
                    size="small"
                    margin="normal"
                    fullWidth
                  >
                    {akses.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                  <TextField
                    required
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    size="small"
                    margin="normal"
                    fullWidth
                  />
                  <TextField
                    required
                    id="outlined-basic"
                    label="Username"
                    variant="outlined"
                    size="small"
                    margin="normal"
                    fullWidth
                  />
                  <TextField
                    required
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                    size="small"
                    margin="normal"
                    fullWidth
                  />
                  <Box marginTop={1.5}>
                    <FileUpload />
                  </Box>
                </Grid>
              </Grid>
              <Box display="flex" justifyContent="flex-end" marginTop="30px" marginRight={15}>
                <Button
                  type="submit"
                  variant="contained"
                  style={{ background: colors.greenAccent[500], width: "150px" }}
                >
                  Submit
                </Button>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Template>
  );
};

export default GuruCreate;
