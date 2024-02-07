import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Button,
  useTheme,
  Divider,
} from "@mui/material";
import * as React from "react";
import TextField from "@mui/material/TextField";

import { tokens } from "../../Theme";
import Template from "../Template/TemplateScreen";
import Header from "../../components/Header";

import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useUpdateUserMutation } from "../../slices/userApiSlice";
import { setCredentials } from "../../slices/authSlice";

const Profile = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [email, setEmail] = useState("");
  const [nama_lengkap, setNama_lengkap] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [image, setImage] = useState();
  const imageData = new FormData();

  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.auth);
  const [updateProfile, { isLoading }] = useUpdateUserMutation();

  useEffect(() => {
    setNama_lengkap(userInfo.nama_lengkap || "");
    setEmail(userInfo.email || "");
  }, [userInfo.email, userInfo.nama_lengkap]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "nama_lengkap") {
      setNama_lengkap(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "confirmPassword") {
      setConfirmPassword(value);
    }
  };

  const updateHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Password tidak sama");
    } else {
      try {
        const res = await updateProfile({
          _id: userInfo._id,
          nama_lengkap,
          email,
          password,
        }).unwrap();
        console.log(res);
        dispatch(setCredentials(res));
        toast.success("Profil berhasil diupdate");
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  const uploadHandler = (e) => {
    e.preventDefault();
    //console.log(image);
    imageData.append("file", image);
    //console.log(image);
    const res = updateProfile({
      data: imageData,
      id: userInfo._id,
    }).unwrap();
  };

  function handleFileInputChange(e) {
    setImage(e.target.files[0]);
    // console.log(e)
  }

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

        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Card>
              <CardContent>
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                >
                  <img
                    alt="profile-user"
                    width="250px"
                    height="250px"
                    src={`http://localhost:5555/images/${
                      !userInfo ? "user.png" : userInfo.profil
                    }`}
                    style={{ cursor: "pointer", borderRadius: "50%" }}
                  />
                  <TextField
                    sx={{ m: 2 }}
                    type="file"
                    defaultValue={image ? image.name : ""}
                    onChange={handleFileInputChange}
                  ></TextField>
                  <Typography fontWeight="600" fontSize="18px" marginTop="20px">
                    {userInfo.username || ""}
                  </Typography>
                  <Button
                    variant="contained"
                    style={{
                      background: colors.greenAccent[300],
                      width: "100px",
                      marginTop: "10px",
                    }}
                    onClick={uploadHandler}
                  >
                    Upload
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={8}>
            <Card>
              <CardContent>
                <form onSubmit={updateHandler}>
                  <Typography
                    variant="h4"
                    fontWeight="bold"
                    fontSize="20px"
                    margin="12px"
                  >
                    Informasi Profil User
                  </Typography>

                  <Divider orientation="horizontal" />
                  <Grid container spacing={3}>
                    <Grid item xs={3} marginLeft={6}>
                      <Typography paddingTop={3}>Username</Typography>
                      <Typography paddingTop={3} marginTop={2}>
                        Nama Lengkap
                      </Typography>
                      <Typography paddingTop={3} marginTop={2}>
                        Email
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        required
                        id="username"
                        name="username"
                        type="text"
                        variant="outlined"
                        size="small"
                        margin="normal"
                        fullWidth
                        value={userInfo.username || ""}
                        disabled
                      />
                      <TextField
                        required
                        id="outlined-basic"
                        label="Nama Lengkap"
                        name="nama_lengkap"
                        type="text"
                        variant="outlined"
                        size="small"
                        margin="normal"
                        fullWidth
                        value={nama_lengkap}
                        onChange={handleInputChange}
                      />
                      <TextField
                        required
                        id="outlined-basic"
                        label="Email"
                        name="email"
                        type="text"
                        variant="outlined"
                        size="small"
                        margin="normal"
                        fullWidth
                        value={email}
                        onChange={handleInputChange}
                      />
                    </Grid>
                  </Grid>
                  <Box display={"flex"} alignItems="center">
                    <Typography
                      variant="h4"
                      fontWeight="bold"
                      fontSize="18px"
                      margin="12px"
                    >
                      Password
                    </Typography>
                    <Typography
                      sx={{ fontStyle: "italic" }}
                      fontSize="12px"
                      style={{ color: colors.redAccent[500] }}
                    >
                      (Lewati jika tidak ingin mengubah password/kata sandi saat
                      ini)
                    </Typography>
                  </Box>
                  <Grid container spacing={3}>
                    <Grid item xs={3} marginLeft={6}>
                      <Typography paddingTop={3}>Ubah Password</Typography>
                      <Typography paddingTop={3} marginTop={2}>
                        Konfirmasi Password
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        id="outlined-basic"
                        label="Ubah Password"
                        name="password"
                        type="text"
                        variant="outlined"
                        size="small"
                        margin="normal"
                        fullWidth
                        value={password}
                        onChange={handleInputChange}
                      />
                      <TextField
                        id="outlined-basic"
                        label="Konfirmasi Password"
                        name="confirmPassword"
                        type="text"
                        variant="outlined"
                        size="small"
                        margin="normal"
                        fullWidth
                        value={confirmPassword}
                        onChange={handleInputChange}
                      />
                    </Grid>
                  </Grid>
                  <Box display="flex" justifyContent="end">
                    <Button
                      variant="contained"
                      style={{ background: colors.grey[500], margin: "12px" }}
                    >
                      Cancel
                    </Button>
                    <Button
                      variant="contained"
                      style={{
                        background: colors.blueAccent[600],
                        margin: "12px",
                      }}
                      type="submit"
                      disabled={isLoading}
                    >
                      Update
                    </Button>
                  </Box>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Template>
  );
};

export default Profile;
