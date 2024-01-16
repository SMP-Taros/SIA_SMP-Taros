import { Box, IconButton, Grid, Typography, useTheme } from "@mui/material";
import { tokens } from "../../Theme";
import Header from "../../components/Header";
import Template from "../Template/TemplateScreen";
import Calendar from "../../components/Calendar";
import StatBox from "../../components/StatBox";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import SchoolIcon from "@mui/icons-material/School";
import GroupsIcon from "@mui/icons-material/Groups";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Template>
      <Box m="20px">
        <Header title="Dashboard" />
        <Box display="flex" justifyContent="space-between" alignItems="center">
          {/* GRID & CHARTS */}
          <Grid container rowSpacing={3} columnSpacing={{ xs: 2, sm: 3, md: 4 }} >

            {/* ROW 1 */}
            <Grid item xs={9}>
              <Box
                p="0 30px"
                backgroundColor="#fff"
                display="flex "
                justifyContent="space-between"
                alignItems="center"
              >
                <Box>
                  <Typography
                    mt="25px"
                    variant="h5"
                    fontWeight="600"
                    color={colors.grey[100]}
                    pb="20px"
                  >
                    Kalender Akademik
                  </Typography>
                  <Box m="-20px 0 0 0">
                    <Calendar />
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={3} >
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                backgroundColor="#fff"
                colors={colors.grey[100]}
                p="20px"
              >
                <StatBox
                  title="Siswa Pendaftar"
                  progress="150"
                  icon={
                    <PersonAddAlt1Icon
                      sx={{ color: colors.greenAccent[600], fontSize: "50px" }}
                    />
                  }
                />
              </Box>
               <Box
                display="flex"
                mt="20px"
                justifyContent="space-between"
                alignItems="center"
                backgroundColor="#fff"
                colors={colors.grey[100]}
                p="20px"
              >
                <StatBox
                  title="Siswa Pendaftar"
                  progress="150"
                  icon={
                    <PersonAddAlt1Icon
                      sx={{ color: colors.greenAccent[600], fontSize: "50px" }}
                    />
                  }
                />
              </Box>
              <Box
                display="flex"
                mt="20px"
                justifyContent="space-between"
                alignItems="center"
                backgroundColor="#fff"
                colors={colors.grey[100]}
                p="20px"
              >
                <StatBox
                  title="Siswa Pendaftar"
                  progress="150"
                  icon={
                    <PersonAddAlt1Icon
                      sx={{ color: colors.greenAccent[600], fontSize: "50px" }}
                    />
                  }
                />
              </Box>
              <Box
                display="flex"
                mt="20px"
                justifyContent="space-between"
                alignItems="center"
                backgroundColor="#fff"
                colors={colors.grey[100]}
                p="20px"
              >
                <StatBox
                  title="Siswa Pendaftar"
                  progress="150"
                  icon={
                    <PersonAddAlt1Icon
                      sx={{ color: colors.greenAccent[600], fontSize: "50px" }}
                    />
                  }
                />
              </Box>
            </Grid>

            {/* ROW 2 */}
            <Grid item xs={6}>
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                backgroundColor="#fff"
                colors={colors.grey[100]}
                p="15px"
              >
                
              </Box>
            </Grid>
            <Grid item xs={6}>
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                backgroundColor="#fff"
                colors={colors.grey[100]}
                p="15px"
              >
                
              </Box>
            </Grid>

            {/* ROW 3 */}
            <Grid item xs={4}>
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                backgroundColor="#fff"
                colors={colors.grey[100]}
                p="15px"
              >
                
              </Box>
            </Grid>
            <Grid item xs={4}>
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                backgroundColor="#fff"
                colors={colors.grey[100]}
                p="15px"
              >
                
              </Box>
            </Grid>
            <Grid item xs={4}>
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                backgroundColor="#fff"
                colors={colors.grey[100]}
                p="15px"
              >
                
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Template>
  );
};

export default Dashboard;
