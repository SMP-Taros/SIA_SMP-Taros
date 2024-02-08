import { Box, Grid, Button, Stack, TextField } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

import EditIcon from "@mui/icons-material/Edit";
import { tokens } from "../../../Theme";
import { useTheme } from "@emotion/react";

import { useState, useEffect } from "react";
import {
  useGetDetailGuruQuery,
  useUpdateDetailGuruMutation,
} from "../../../slices/guruApiSlice";

import DetailInformationGrid from "../../Form/DetailInformationGrid.jsx";

import { InformationDialog } from "../../Dialog/InformationDialog.jsx";
import ConfirmationDialog from "../../Dialog/ConfirmationDialog.jsx";

const Informasi = (props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const { data, isLoading } = useGetDetailGuruQuery(props.id);
  const [update, { isLoadingUpdate }] = useUpdateDetailGuruMutation();

  const [formData, setFormData] = useState({});
  const [openConfModal, setOpenConfModal] = useState(false);
  const [infoModal, setInfoModal] = useState({
    isOpen: false,
    msg: "Berhasil ubah data!",
  });
  const [image, setImage] = useState();
  const imageData = new FormData();

  let detail;
  var token = props.id;
  if (!isLoading) {
    detail = data.data;
  }

  useEffect(() => {
    if (detail) {
      setFormData(detail);
    }
  }, [detail]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    setOpenConfModal(true);
  };

  function updateData() {
    setOpenConfModal(false);

    var res = update({
      id: token,
      data: formData,
    }).unwrap();
    res.then((e) => {
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
  }

  const uploadHandler = (e) => {
    e.preventDefault();
    imageData.append("file", image);
    const res = update({
      id: token,
      data: imageData,
    }).unwrap();

    window.location.reload();
  };

  function handleFileInputChange(e) {
    setImage(e.target.files[0]);
    // console.log(e)
    // console.log(image)
  }

  return (
    <Grid container component="div" sx={{ pt: 1 }} spacing={2}>
      <ConfirmationDialog
        isOpen={openConfModal}
        content="Perubahan pada data siswa tidak bisa dikembalikan !"
        onAgree={updateData && uploadHandler}
        onClose={() => {
          setOpenConfModal(false);
          setFormData(detail);
        }}
      ></ConfirmationDialog>
      <InformationDialog
        isOpen={infoModal.isOpen}
        content="Berhasil mengubah data !"
        onClose={() =>
          setInfoModal((prevState) => {
            return { ...prevState, isOpen: false };
          })
        }
      ></InformationDialog>
      <Grid item xs={4}>
        <Stack>
          <img
            alt="profile-user"
            width="200px"
            height="200px"
            src={`http://localhost:5555/images/${
              !formData ? "user.png" : formData.profil
            }`}
            style={{
              cursor: "pointer",
              borderRadius: "50%",
              margin: "auto",
              marginTop: "10px",
            }}
          />
          <TextField
            sx={{ m: 2 }}
            type="file"
            defaultValue={image ? image.name : ""}
            onChange={handleFileInputChange}
          ></TextField>
          <Button
            sx={{ mx: 2 }}
            component="label"
            variant="contained"
            startIcon={<CloudUploadIcon />}
            onClick={onSubmitForm}
          >
            Upload file
          </Button>
        </Stack>
      </Grid>
      <Grid item xs={8}>
        <form onSubmit={onSubmitForm}>
          <Box maxHeight="400px" overflow="auto" padding="10px">
            {formData && (
              <>
                <DetailInformationGrid
                  title="Nama"
                  inputValue={formData.nama}
                  inputName="nama"
                  onInputChange={handleInputChange}
                ></DetailInformationGrid>
                <DetailInformationGrid
                  title="NUPTK"
                  inputValue={formData.nuptk}
                ></DetailInformationGrid>
                <DetailInformationGrid
                  title="Jenis Kelamin"
                  inputName="jenis_kelamin"
                  inputValue={formData.jenis_kelamin}
                  onInputChange={handleInputChange}
                ></DetailInformationGrid>
                <DetailInformationGrid
                  title="Tempat Lahir"
                  inputName="tempat_lahir"
                  inputValue={formData.tempat_lahir}
                  onInputChange={handleInputChange}
                ></DetailInformationGrid>
                <DetailInformationGrid
                  title="Tanggal Lahir"
                  inputValue={formData.tanggal_lahir}
                  inputName="tanggal_lahir"
                  onInputChange={handleInputChange}
                ></DetailInformationGrid>
                <DetailInformationGrid
                  title="NIPY"
                  inputValue={formData.nipy}
                  inputName="nipy"
                  onInputChange={handleInputChange}
                ></DetailInformationGrid>
                <DetailInformationGrid
                  title="NIK"
                  inputValue={formData.nik}
                  inputName="nik"
                  onInputChange={handleInputChange}
                ></DetailInformationGrid>
                <DetailInformationGrid
                  title="No KK"
                  inputName="no_kk"
                  inputValue={formData.no_kk}
                  onInputChange={handleInputChange}
                ></DetailInformationGrid>
                <DetailInformationGrid
                  title="Status Kepegawaian"
                  inputName="status_kepegawaian"
                  inputValue={formData.status_kepegawaian}
                  onInputChange={handleInputChange}
                ></DetailInformationGrid>
                <DetailInformationGrid
                  title="Jenis PTK"
                  inputName="jenis_ptk"
                  inputValue={formData.jenis_ptk}
                  onInputChange={handleInputChange}
                ></DetailInformationGrid>
                <DetailInformationGrid
                  title="Alamat"
                  inputName="alamat"
                  inputValue={formData.alamat}
                  onInputChange={handleInputChange}
                ></DetailInformationGrid>
                <DetailInformationGrid
                  title="No HP"
                  inputName="no_hp"
                  inputValue={formData.no_hp}
                  onInputChange={handleInputChange}
                ></DetailInformationGrid>
                <DetailInformationGrid
                  title="Email"
                  inputName="email"
                  inputValue={formData.email}
                  onInputChange={handleInputChange}
                ></DetailInformationGrid>
                <DetailInformationGrid
                  title="SK Pengangkatan"
                  inputName="sk_pengangkatan"
                  inputValue={formData.sk_pengangkatan}
                  onInputChange={handleInputChange}
                ></DetailInformationGrid>
                <DetailInformationGrid
                  title="TMT Pengangkatan"
                  inputName="tmt_pengangkatan"
                  inputValue={formData.tmt_pengangkatan}
                  onInputChange={handleInputChange}
                ></DetailInformationGrid>
                <DetailInformationGrid
                  title="Status Perkawinan"
                  inputName="status_perkawinan"
                  inputValue={formData.status_perkawinan}
                  onInputChange={handleInputChange}
                ></DetailInformationGrid>
                <DetailInformationGrid
                  title="Nama Pasangan"
                  inputName="nama_pasangan"
                  inputValue={formData.nama_pasangan}
                  onInputChange={handleInputChange}
                ></DetailInformationGrid>
                <DetailInformationGrid
                  title="Pekerjaan Pasangan"
                  inputName="pekerjaan_pasangan"
                  inputValue={formData.pekerjaan_pasangan}
                  onInputChange={handleInputChange}
                ></DetailInformationGrid>
              </>
            )}
          </Box>

          <Box display="flex" justifyContent="flex-end" marginTop="20px">
            <Button
              variant="contained"
              startIcon={<EditIcon />}
              style={{
                background: colors.greenAccent[800],
                width: "100px",
              }}
              type="submit"
              disabled={isLoadingUpdate}
            >
              Edit
            </Button>
          </Box>
        </form>
      </Grid>
    </Grid>
  );
};

export default Informasi;
