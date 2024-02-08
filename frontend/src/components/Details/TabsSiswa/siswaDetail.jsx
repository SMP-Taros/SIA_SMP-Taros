import { Box, Grid, Button, Stack, TextField } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useTheme } from "@emotion/react";
import { tokens } from "../../../Theme";

import EditIcon from "@mui/icons-material/Edit";

import { useState, useEffect } from "react";
import {
  useGetDetailSiswaQuery,
  useUpdateDetailSiswaMutation,
} from "../../../slices/siswaApiSlice";

import DetailInformationGrid from "../../Form/DetailInformationGrid.jsx";

import { InformationDialog } from "../../Dialog/InformationDialog.jsx";
import ConfirmationDialog from "../../Dialog/ConfirmationDialog.jsx";

const DetailSiswa = (props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { data, isLoading } = useGetDetailSiswaQuery(props.id);
  const [update, { isLoadingUpdate }] = useUpdateDetailSiswaMutation();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const [detail, setDetail] = useState();
  const [formData, setFormData] = useState({});
  const [openConfModal, setOpenConfModal] = useState(false);
  const [infoModal, setInfoModal] = useState({
    isOpen: false,
    msg: "Berhasil ubah data!",
  });
  const [image, setImage] = useState();
  const imageData = new FormData();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // eslint-disable-next-line react-hooks/rules-of-hooks
  let detail;
  var token = props.id;
  if (!isLoading) {
    detail = data.data;
  }
  console.log(detail, formData);
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
      if (e.message === "siswa berhasil di update") {
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
                  title="NIS"
                  inputValue={formData.nis}
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
                  title="NIK"
                  inputValue={formData.nik}
                  inputName="nik"
                  onInputChange={handleInputChange}
                ></DetailInformationGrid>
                <DetailInformationGrid
                  title="Agama"
                  inputValue={formData.agama}
                  inputName="agama"
                  onInputChange={handleInputChange}
                ></DetailInformationGrid>
                <DetailInformationGrid
                  title="Alamat"
                  inputName="alamat"
                  inputValue={formData.alamat}
                  onInputChange={handleInputChange}
                ></DetailInformationGrid>
                <DetailInformationGrid
                  title="Asal Sekolah"
                  inputName="asal_sekolah"
                  inputValue={formData.asal_sekolah}
                  onInputChange={handleInputChange}
                ></DetailInformationGrid>
                <DetailInformationGrid
                  title="Status"
                  inputName="status_anak"
                  inputValue={formData.status_anak}
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

export default DetailSiswa;
