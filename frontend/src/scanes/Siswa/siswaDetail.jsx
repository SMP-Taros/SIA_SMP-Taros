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
  Button,
  Modal,
  Backdrop,
  Fade,
} from "@mui/material";
import { tokens } from "../../Theme";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Template from "../Template/TemplateScreen";
import Header from "../../components/Header";
import CustomTabPanel from "../../components/Details/CustomTabPanel";
import DetailSiswa from "../../components/Details/TabsSiswa/siswaDetail";
import KesehatanSiswa from "../../components/Details/TabsSiswa/kesehatanSiswa";
import PencapaianSiswa from "../../components/Details/TabsSiswa/pencapaianSiswa";
import OrangtuaSiswa from "../../components/Details/TabsSiswa/orangtuaSiswa";

import { useDeleteSiswaMutation } from "../../slices/siswaApiSlice";

import { useParams } from "react-router-dom";

// import Kehadiran from "../../../components/Details/TabsGuru/Kehadiran";
// import MataPelajaran from "../../../components/Details/TabsGuru/MataPelajaran";

const siswaDetail = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [value, setValue] = useState(0);
  const [Delete, { isLoadingDelete }] = useDeleteSiswaMutation();
  const navigate = useNavigate();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function a11yProps(index) {
    return {
      id: `tab-${index}`,
      "aria-controls": `tabpanel-${index}`,
    };
  }

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { id } = useParams();

  const deleteHandle = (e) => {
    e.preventDefault();
    console.log("submit");
    try {
      const del = Delete({ id: id }).unwrap();
      navigate("/siswa");
      window.location.reload();
    } catch (e) {}
  };

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
                <Tab label="Kesehatan" {...a11yProps(1)} />
                <Tab label="Pencapaian" {...a11yProps(2)} />
                <Tab label="Orang Tua" {...a11yProps(3)} />
                <Button
                  variant="contained"
                  style={{
                    marginLeft: "1100px",
                    height: "35px",
                    background: colors.redAccent[400],
                  }}
                  onClick={handleOpen}
                >
                  Delete
                </Button>
                <Modal
                  aria-labelledby="transition-modal-title"
                  aria-describedby="transition-modal-description"
                  open={open}
                  onClose={handleClose}
                  closeAfterTransition
                  slots={{ backdrop: Backdrop }}
                  slotProps={{
                    backdrop: {
                      timeout: 500,
                    },
                  }}
                >
                  <Fade in={open}>
                    <Box sx={style}>
                      <Typography
                        id="transition-modal-title"
                        variant="h6"
                        component="h2"
                      >
                        Apakah anda yakin?
                      </Typography>
                      <Box marginTop="20px">
                        <Button
                          variant="contained"
                          style={{
                            height: "30px",
                            background: colors.redAccent[400],
                          }}
                          onClick={deleteHandle}
                        >
                          Ya
                        </Button>
                        <Button
                          variant="contained"
                          style={{
                            height: "30px",
                            background: colors.greenAccent[400],
                            marginLeft: "20px",
                          }}
                          onClick={handleClose}
                        >
                          Tidak
                        </Button>
                      </Box>
                    </Box>
                  </Fade>
                </Modal>
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <DetailSiswa id={id} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <KesehatanSiswa id={id} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              <PencapaianSiswa id={id} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
              <OrangtuaSiswa id={id} />
            </CustomTabPanel>
          </CardContent>
        </Card>
      </Box>
    </Template>
  );
};

export default siswaDetail;
