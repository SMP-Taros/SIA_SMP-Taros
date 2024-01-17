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
import TabelTertinggi from "../../components/Table/TabelTertinggi";
import TabelKehadiran from "../../components/Table/TabelKehadiran";
import TabelPeringkat from "../../components/Table/TebelPeringkat";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Template>
      <Box m="20px">
        <Header title="Dashboard" />
        <Box display="flex" justifyContent="space-between" alignItems="center">
          {/* GRID & CHARTS */}
          <Grid
            container
            rowSpacing={3}
            columnSpacing={{ xs: 2, sm: 3, md: 4 }}
          >
            {/* ROW 1 */}
            <Grid item xs={9}>
              <Box p="15px" backgroundColor="#fff">
                <Box>
                  <Typography
                    mt="25px"
                    variant="h4"
                    fontWeight="600"
                    color={colors.grey[100]}
                    pb="20px"
                    pl="20px"
                  >
                    Kalender Akademik
                  </Typography>
                  <Box m="-20px 0 30px 20px">
                    <Calendar />
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Grid container spacing={5}>
                <Grid item xs={12}>
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
                      titleColor={colors.greenAccent[600]}
                      icon={
                        <PersonAddAlt1Icon
                          sx={{
                            color: colors.greenAccent[600],
                            fontSize: "50px",
                          }}
                        />
                      }
                    />
                  </Box>
                </Grid>

                <Grid item xs={12}>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    backgroundColor="#fff"
                    colors={colors.grey[100]}
                    p="20px"
                  >
                    <StatBox
                      title="Jumlah Siswa"
                      progress="302"
                      titleColor={colors.blueAccent[600]}
                      icon={
                        <SchoolIcon
                          sx={{
                            color: colors.blueAccent[600],
                            fontSize: "50px",
                          }}
                        />
                      }
                    />
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    backgroundColor="#fff"
                    colors={colors.grey[100]}
                    p="20px"
                  >
                    <StatBox
                      title="Jumlah Tenaga Kerja"
                      progress="90"
                      titleColor={colors.greenAccent[800]}
                      icon={
                        <GroupsIcon
                          sx={{
                            color: colors.greenAccent[800],
                            fontSize: "50px",
                          }}
                        />
                      }
                    />
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    backgroundColor="#fff"
                    colors={colors.grey[100]}
                    p="20px"
                  >
                    <StatBox
                      title="Akses Pengguna"
                      progress="50"
                      titleColor={colors.redAccent[500]}
                      icon={
                        <AssignmentIndIcon
                          sx={{
                            color: colors.redAccent[500],
                            fontSize: "50px",
                          }}
                        />
                      }
                    />
                  </Box>
                </Grid>
              </Grid>
            </Grid>

            {/* ROW 2 */}
            <Grid item xs={6}>
              <Box
                display="flex"
                justifyContent="center" // Mengubah menjadi center
                alignItems="center"
                backgroundColor="#fff"
                color={colors.grey[100]} // Mengganti colors menjadi color
                p="15px"
              >
                <TabelKehadiran title="Daftar Hadir Tenaga Kerja" />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                backgroundColor="#fff"
                colors={colors.grey[100]}
                p="15px"
              >
                <TabelPeringkat title="Peringkat Tenaga Kerja Terbaik" />
              </Box>
            </Grid>

            {/* ROW 3 */}
            <Grid item xs={4} marginBottom="30px">
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                backgroundColor="#fff"
                colors={colors.grey[100]}
                p="15px"
              >
                <TabelTertinggi title=" Top 3 Rata-Rata Tertinggi Kelas 9 (Angkatan 2021)" />
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                backgroundColor="#fff"
                colors={colors.grey[100]}
                p="15px"
              >
                <TabelTertinggi title=" Top 3 Rata-Rata Tertinggi Kelas 8 (Angkatan 2022)" />
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                backgroundColor="#fff"
                colors={colors.grey[100]}
                p="15px"
              >
                <TabelTertinggi title=" Top 3 Rata-Rata Tertinggi Kelas 7 (Angkatan 2023)" />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Template>
  );
};

export default Dashboard;
