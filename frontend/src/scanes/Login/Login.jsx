import {
  Box,
  CardContent,
  Stack,
  Grid,
  Typography,
  InputAdornment,
  TextField,
  IconButton,
  Button,
} from "@mui/material";
import LoginForm from "../../components/Form/loginForm";
// import background from "../../assets/background/background1.png"
import logo1 from "../../assets/logo/logo1.png";
import logo2 from "../../assets/logo/logo2.png";
import { useState, useEffect } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { useDispatch, useSelector } from "react-redux";

import { useLoginMutation } from "../../slices/userApiSlice";

import { setCredentials } from "../../slices/authSlice";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/dashboard");
    }
  }, [navigate, userInfo]);

  const [showPasssword, setShowPassword] = useState(false);

  const handlePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("submit");

    // console.log(res);

    try {
      const res = await login({ username, password }).unwrap();
      dispatch(setCredentials({ ...res }));

      navigate("/dashboard");
    } catch (err) {
      // console.log(err);
      toast.error(err?.data?.message || "username or password are wrong");
    }
  };

  return (
    <LoginForm>
      <CardContent item>
        <Box component="div" width="100%" margin="auto" marginTop="20px">
          <Grid container>
            <Grid item xs={3}>
              <Box
                component="img"
                width="83px"
                height="87px"
                marginLeft="10px"
                src={logo1}
              ></Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                component="div"
                display="flex"
                flexDirection="column"
                textAlign="center"
              >
                <Typography variant="h3" fontSize="48px">
                  SIA
                </Typography>
                <Typography variant="h4" fontSize="20px">
                  Sistem Informasi Akademik
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box
                component="img"
                width="83px"
                height="87px"
                marginLeft="45px"
                src={logo2}
              ></Box>
            </Grid>
          </Grid>
        </Box>
        <Box
          component="div"
          width="90%"
          margin="auto"
          // padding="10px"
          paddingTop="70px"
        >
          <form onSubmit={submitHandler}>
            <Stack spacing={4}>
              <TextField
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                label="Username"
              >
                Username
              </TextField>
              <TextField
                label="Password"
                // value={password}
                type={showPasssword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                InputProps={{
                  // Correct the typo here
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handlePassword}>
                        {showPasssword ? (
                          <VisibilityOffIcon />
                        ) : (
                          <VisibilityIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              >
                Password
              </TextField>
            </Stack>
            <Box
              component="div"
              width="87%"
              margin="auto"
              marginTop="20px"
              marginBottom="30px"
              textAlign="center"
            >
              <Button
                variant="contained"
                disabled={isLoading}
                size="large"
                style={{
                  width: "100%",
                  margin: "auto",
                  backgroundColor: "#F6C03C",
                }}
                // component={Link}
                // to="/"
                type="submit"
              >
                Sign In
              </Button>
              <Typography variant="h6" fontSize="16px" paddingTop="20px">
                Forgot Password ?
              </Typography>
            </Box>
          </form>
        </Box>
      </CardContent>
    </LoginForm>
  );
};

export default Login;
