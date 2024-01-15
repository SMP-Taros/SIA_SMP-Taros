import {
  Box,
  CardContent,
  Stack,
  Grid,
  Typography,
  InputAdornment,
  TextField,
  IconButton,
  CardActions,
  Button,
} from "@mui/material";
import LoginForm from "../../components/Form/loginForm";
// import background from "../../assets/background/background1.png"
import logo1 from "../../assets/logo/logo1.png";
import logo2 from "../../assets/logo/logo2.png";
import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPasssword, setShowPassword] = useState(false);

  const handlePassword = () => {
    setShowPassword((prev) => !prev);
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
          <Stack spacing={4}>
            <TextField label="Username">Username</TextField>
            <TextField
              label="Password"
              type={showPasssword ? "text" : "password"}
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
        </Box>
      </CardContent>
      <CardActions>
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
            size="large"
            style={{
              width: "100%",
              margin: "auto",
              backgroundColor: "#F6C03C",
            }}
            component={Link}
            to="/"
          >
            Sign In
          </Button>
          <Typography variant="h6" fontSize="16px" paddingTop="20px">
            Forgot Password ?
          </Typography>
        </Box>
      </CardActions>
    </LoginForm>
  );
};

export default Login;
