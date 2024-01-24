/* eslint-disable react-hooks/rules-of-hooks */
import {
  Box,
  Card,
  CardContent,
  Grid,
  Tabs,
  Tab,
  Typography,
  useTheme,
} from "@mui/material";
import { tokens } from "../../Theme";
import { useEffect, useState } from "react";

import Template from "../Template/TemplateScreen";
import Header from "../../components/Header";
import CustomTabPanel from "../../components/Details/CustomTabPanel";
import DetailSiswa from "../../components/Details/TabsSiswa/siswaDetail";

import { useGetDetailQuery } from "../../slices/siswaApiSlice";

import { useParams } from "react-router-dom";

// import Kehadiran from "../../../components/Details/TabsGuru/Kehadiran";
// import MataPelajaran from "../../../components/Details/TabsGuru/MataPelajaran";

const siswaDetail = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function a11yProps(index) {
    return {
      id: `tab-${index}`,
      "aria-controls": `tabpanel-${index}`,
    };
  }

  const { id } = useParams();

  return (
    <Template>
      <Box component="div" width="100%" padding="40px" paddingRight="70px">
        <Grid container justifyContent="space-between">
          <Grid item>
            <Header title="Data Master > Siswa > Detail" />
          </Grid>
          <Grid item>
            <Typography variant="h2" fontSize="20px" marginTop="24px">
              Admin/Data master
            </Typography>
          </Grid>
        </Grid>
        <Card>
          <CardContent>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="Informasi" {...a11yProps(0)} />
                <Tab label="Kehadiran" {...a11yProps(1)} />
                <Tab label="Mata Pelajaran" {...a11yProps(2)} />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <DetailSiswa id={id} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}></CustomTabPanel>
            <CustomTabPanel value={value} index={2}></CustomTabPanel>
          </CardContent>
        </Card>
      </Box>
    </Template>
  );
};

export default siswaDetail;
