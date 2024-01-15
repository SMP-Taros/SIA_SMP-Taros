import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../Theme";
import Header from "../../components/Header";
import Template from "../Template/TemplateScreen";
import Calendar from "../../components/Calendar";
// import StatBox from "../../components/StatBox";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Template>
      <Box m="20px">
        <Header title="Dashboard" />
        <Box display="flex" justifyContent="space-between" alignItems="center">
          {/* GRID & CHARTS */}
          <Box
            display="grid"
            gridTemplateColumns="repeat(12, 1fr)"
            gridAutoRows="140px"
            gap="20px"
          >
            {/* ROW 1 */}
            <Box gridColumn="span 8" gridRow="span 3" backgroundColor="#fff">
              <Box
                mt="25px"
                p="0 30px"
                display="flex "
                justifyContent="space-between"
                alignItems="center"
              >
                <Box>
                  <Typography
                    variant="h5"
                    fontWeight="600"
                    color={colors.grey[100]}
                    pb="20px"
                  >
                    Kalender Akademik
                  </Typography>
                  <Box height="250px" m="-20px 0 0 0">
                    <Calendar />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            gridColumn="span 4"
            gridRow="span 1"
            backgroundColor={colors.primary[400]}
            overflow="auto"
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              colors={colors.grey[100]}
              p="15px"
            >
              {/* <StatBox /> */}
            </Box>
          </Box>
        </Box>
      </Box>
    </Template>
  );
};

export default Dashboard;
