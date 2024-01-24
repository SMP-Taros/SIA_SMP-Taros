import { Box, TextField, Modal, Typography, Button, Grid, useTheme } from "@mui/material";
import * as React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DetailGuru from "./DetailGuru";
import { tokens } from "../../../Theme";

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

const Informasi = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const teacherData = {
    nama: "Sri rejeki",
    NUPTK: "12335434",
    jenis_kelamin: "Perempuan",
    tempat_lahir: "wonogiri",
    tanggal_lahir: "12 Januari 2004",
    NIPY: "0390489585",
    NIK: "298238383",
    no_kk: "2023837",
    status_kepegawaian: "PNS",
    jenis_ptk: "none",
    alamat: "Batang",
    no_hp: "02928272",
    email: "halo@gamil.com",
    sk_pengangkatan: "file.sk",
    tmt_pengangkatan: "file.mt",
    status_perkawinan: "Menikah",
    nama_pasangan: "Rahman",
    pekerjaan_pasangan: "nganggur",
  };

  return (
    <div>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Box display="flex" justifyContent="center" alignItems="center">
              <img
                alt="profile-user"
                width="300px"
                height="300px"
                src={`../../user.png`}
                style={{ cursor: "pointer", borderRadius: "50%" }}
              />
            </Box>
          </Grid>
          <Grid item xs={8}>
            <DetailGuru data={teacherData} />
          </Grid>
        </Grid>
      </Box>
      <Box display="flex" justifyContent="flex-end" marginTop="30px">
        <Button
          onClick={handleOpen}
          variant="contained"
          startIcon={<EditIcon />}
          style={{ background: colors.greenAccent[800] }}
        >
          Edit Profil
        </Button>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </Box>
      </Modal>
    </div>
  );
};

export default Informasi;
