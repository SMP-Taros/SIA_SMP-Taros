import { Box, Button, Grid, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DetailGuru from "./DetailGuru";
import { tokens } from "../../../Theme";

const Informasi = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

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
          component={Link}
          to="/guru/edit"
          variant="contained"
          startIcon={<EditIcon />}
          style={{ background: colors.greenAccent[800] }}
        >
          Edit Profil
        </Button>
      </Box>
    </div>
  );
};

export default Informasi;
