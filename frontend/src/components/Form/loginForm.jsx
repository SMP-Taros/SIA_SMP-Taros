import { Card, Box } from "@mui/material";
import background from "../../assets/background/background1.png";

const LoginForm = ({ children }) => {
  return (
    <Box
      style={{
        width: "100%",
        height: "100%",
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        margin: 0,
        padding: 0,
        // overflow: "hidden",
      }}
    >
      <Box component="div" margin="auto" width="616px" paddingTop="150px">
        <Card container>{children}</Card>
      </Box>
    </Box>
  );
};

export default LoginForm;
