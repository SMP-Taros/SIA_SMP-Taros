import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  MenuItem,
  Button,
  useTheme,
} from "@mui/material";
import * as React from "react";
import TextField from "@mui/material/TextField";

import { tokens } from "../../Theme";
import Template from "../Template/TemplateScreen";
import { Link } from "react-router-dom";
import Header from "../../components/Header";

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

const Profile = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Template>
      <Box component="div" width="100%" padding="40px" paddingRight="70px">
        <Grid container justifyContent="space-between">
          <Grid item>
            <Header title="Profile" />
          </Grid>
          <Grid item>
            <Typography variant="h2" fontSize="20px" marginTop="24px">
              Admin/Profile
            </Typography>
          </Grid>
        </Grid>
        <Card>
          <CardContent style={{ background: colors.grey[700] }}>
            <Grid container justifyContent="space-between">
              <Grid item>
                <Typography variant="h3" marginLeft={2}>Data User</Typography>
              </Grid>
              <Grid item>
                <Button
                  component={Link}
                  to="/guru/edit"
                  variant="contained"
                  style={{
                    background: colors.redAccent[600],
                    marginRight: "20px",
                  }}
                >
                  Reset
                </Button>
                <Button
                  component={Link}
                  to="/guru/edit"
                  variant="contained"
                  style={{ background: colors.greenAccent[500] }}
                >
                  Simpan
                </Button>
              </Grid>
            </Grid>
          </CardContent>
          <CardContent>
            <Grid container spacing={4}>
              <Grid item xs={3} marginLeft={6}>
                <Typography paddingTop={3}>
                  <strong>Username</strong>
                </Typography>
                <Typography paddingTop={3} marginTop={2}>
                  <strong>Nama</strong>
                </Typography>
                <Typography paddingTop={3} marginTop={2}>
                  <strong>Alamat</strong>
                </Typography>
                <Typography paddingTop={3} marginTop={2}>
                  <strong>Hak Akses</strong>
                </Typography>
              </Grid>
              <Grid item xs={6} marginLeft={-15}>
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
                  label="Nama"
                  variant="outlined"
                  size="small"
                  margin="normal"
                  fullWidth
                />
                <TextField
                  required
                  id="outlined-basic"
                  label="Alamat"
                  variant="outlined"
                  size="small"
                  margin="normal"
                  fullWidth
                />
                <TextField
                  required
                  id="outlined-select-currency"
                  select
                  label="Pilih"
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
              </Grid>
              <Grid item xs={3} marginLeft={5}>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <img
                    alt="profile-user"
                    width="200px"
                    height="200px"
                    src={`../../user.png`}
                    style={{ cursor: "pointer", borderRadius: "50%" }}
                  />
                </Box>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <Button
                    component={Link}
                    to="/guru/edit"
                    variant="contained"
                    style={{ background: colors.blueAccent[600] }}
                  >
                    Upload
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </Template>
  );
};

export default Profile;
