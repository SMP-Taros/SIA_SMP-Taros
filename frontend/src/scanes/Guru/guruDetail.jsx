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
} from "@mui/material";
import { tokens } from "../../Theme";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Template from "../Template/TemplateScreen";
import Header from "../../components/Header";
import CustomTabPanel from "../../components/Details/CustomTabPanel";
import Informasi from "../../components/Details/TabsGuru/Informasi";
import Kehadiran from "../../components/Details/TabsGuru/Kehadiran";
import MataPelajaran from "../../components/Details/TabsGuru/MataPelajaran";
import { useParams } from "react-router-dom";

import { useDeleteGuruMutation } from "../../slices/guruApiSlice";

import CustomBreadcrumbs from "../../components/CustomBreadcrumbs.jsx";
import { InformationDialog } from "../../components/Dialog/InformationDialog.jsx";
import ConfirmationDialog from "../../components/Dialog/ConfirmationDialog.jsx";

const GuruDetail = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [value, setValue] = useState(0);
  const [Delete, { isLoadingDelete }] = useDeleteGuruMutation();
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

  const [openConfModal, setOpenConfModal] = useState(false);
  const [infoModal, setInfoModal] = useState({
    isOpen: false,
    msg: "Berhasil menghapus data!",
  });

  const { id } = useParams();

  const onDeleteForm = (e) => {
    e.preventDefault();
    setOpenConfModal(true);
  };

  const deleteHandle = (e) => {
    setOpenConfModal(false);
    try {
      const del = Delete({ id: id }).unwrap();
      del.then((e) => {
        if (e.message === "guru berhasil di update") {
          setInfoModal((prevState) => {
            return { ...prevState, isOpen: true };
          });
        } else {
          setInfoModal((prevState) => {
            return { msg: e.message, isOpen: true };
          });
        }
      });
      navigate("/guru");
      window.location.reload();
    } catch (e) {}
  };

  return (
    <Template>
      <Box component="div" width="100%" padding="40px" paddingRight="70px">
        <Grid container justifyContent="space-between">
          <Grid item>
            {/* <Header title="Data Master > Guru > Detail" /> */}
            <CustomBreadcrumbs></CustomBreadcrumbs>
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

                <Button
                  variant="contained"
                  style={{
                    position: "absolute",
                    right: 0,
                    height: "35px",
                    background: colors.redAccent[400],
                  }}
                  onClick={onDeleteForm}
                >
                  Delete
                </Button>
                <ConfirmationDialog
                  isOpen={openConfModal}
                  content="Guru yang terhapus tidak bisa dikembalikan !"
                  onAgree={deleteHandle}
                  onClose={() => {
                    setOpenConfModal(false);
                  }}
                ></ConfirmationDialog>
                <InformationDialog
                  isOpen={infoModal.isOpen}
                  content="Berhasil menghapus guru !"
                  onClose={() =>
                    setInfoModal((prevState) => {
                      return { ...prevState, isOpen: false };
                    })
                  }
                ></InformationDialog>
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <Informasi id={id} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <Kehadiran />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              <MataPelajaran />
            </CustomTabPanel>
          </CardContent>
        </Card>
      </Box>
    </Template>
  );
};

export default GuruDetail;
