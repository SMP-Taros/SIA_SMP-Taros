import { FormControl, FormGroup, FormLabel } from "@mui/material";
import LoginForm from "../../components/Form/loginForm";
// import background from "../../assets/background/background1.png"
import logo1 from "../../assets/logo/logo1.png"
import logo2 from "../../assets/logo/logo2.png"

const Login = () => {
    return (
    <LoginForm>
        <div className="header">-
            <img src={logo1} alt="" />
            <div className="titleDiv">
                <h1>SIA</h1>
                <h2>Sistem Informasi Akademik</h2>
            </div>
            <img src={logo2} alt="" />
        </div>
        <FormGroup className="mb-3" controlId="username" >
            <FormLabel>Username</FormLabel>
            <FormControl type="username" placeholder="Username"></FormControl>
        </FormGroup>
    </LoginForm>
    )
};

export default Login;