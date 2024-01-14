import { Card, Container, Grid} from "@mui/material";

const LoginForm = ({children}) => {
    return (
        <Container>
            <Grid justifyContent="center">
                <Card>
                    {children}
                </Card>
            </Grid>
        </Container>
    )
    
};

export default LoginForm;