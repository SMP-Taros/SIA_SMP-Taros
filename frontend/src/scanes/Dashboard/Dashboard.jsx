import { Box } from "@mui/material";
import Header from "../../components/Header";
import Template from "../Template/TemplateScreen";

const Dashboard = () => {
  return (
    <Template>
      <Box m="20px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Header title="Dashboard" />
        </Box>
      </Box>
    </Template>
  );
};

export default Dashboard;
