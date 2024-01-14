import { Card, Container, Box } from "@mui/material";

const LoginForm = ({ children }) => {
  return (
    <Container>
      <Box component="div" margin="auto" width="616px" marginTop="150px" p={2}>
        <Card container>{children}</Card>
      </Box>
    </Container>
  );
};

export default LoginForm;
